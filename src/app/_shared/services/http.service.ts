import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, observable, BehaviorSubject } from 'rxjs';
import { catchError, map, timeout } from 'rxjs/operators';
import { get } from 'lodash-es';
import * as md5 from 'md5';

import { HttpRequestParams } from '../models/http-request-params.model';
import { flatten } from '../helpers/flatten';
import { AppConfig } from '../models/app-config.model';


// I've left HttpService in so Network requests are still demo'd
// Unfortunately as everything will 404, cachedResponses does not work
@Injectable({
    providedIn: 'root'
})
export class HttpService {
    constructor(
        @Inject(DOCUMENT) private document: Document,
        private appConfig: AppConfig,
        private httpClient: HttpClient
    ) { }

    public headers: HttpHeaders = new HttpHeaders({
        'content-type': 'application/json'
    });

    public request<T>(req: HttpRequestParams): Observable<T> { // console.log('httpService', req);
        return this.httpClient.request(
            req.method || 'GET',
            (() => {
                if (req.query) // flatten into c# decodable object
                    req.url += // '?filter.key=upcoming&filter.statuses[0]=U&filter.entrants[0].userId=2&take=5';
                        Object.entries(flatten(req.query)).reduce((mem, [key, val]) => {
                        if (val) {
                            if (Array.isArray(val) && !val.length)
                                return mem;
                            mem += key + '=' + val + '&';
                        }
                        return mem;
                    }, '?').slice(0, -1); // new URLSearchParams(flatten(req.query)).toString(); // filter.entrants[0].userId=1';
                if (!req.isExternal) req.url = this.document.location.protocol + '//' + this.appConfig.api + req.url;
                return  req.url;
            })(),
            {
                body: req.body,
                // params: flatten(req.query),
                headers: req.headers || this.headers,
                observe: req.observe || 'body'
            }
        ).pipe(
            timeout(1000), // Avoid Mock requests potentially taking forever to fail
            catchError((response: HttpErrorResponse) => { // console.error(response);
                if (get(response.error, 'title')) Object.assign(response, { error: response.error.title});
                throw response;
            })
        );
    }

    private cachedResponses: { [url: string]: any } = {};
    public get<T>(req: string | HttpRequestParams, force = false): Observable<T> {
        const reqParams = (typeof req === 'string') ? { url: req } : req;
        // const url = (typeof req === 'string') ? req : req.url;
        const hashKey = md5(reqParams.url + (reqParams.query ? JSON.stringify(reqParams.query) : ''));
        const cachedResponse: T = this.cachedResponses[hashKey];
        if (!force && this.cachedResponses[hashKey]) {
            const cachedObservable = new BehaviorSubject<T>(cachedResponse);
            setTimeout(() => {
                cachedObservable.complete(); console.log('returned cache:', reqParams.url, hashKey);
            });
            return cachedObservable;
        } else {
            return this.request<T>(reqParams).pipe(map(response => { console.log('save cache:', reqParams.url);
                this.cachedResponses[hashKey] = response;
                return response;
            }));
        }
    }

    public post<T>(req: string | HttpRequestParams): Observable<T> {
        if (typeof req === 'string') req = { url: req };
        return this.request<T>(Object.assign({
            method: 'POST'
        }, req));
    }

    public delete(req: string | HttpRequestParams): Observable<void> {
        if (typeof req === 'string') req = { url: req };
        return this.request(Object.assign({
            method: 'DELETE'
        }, req));
    }

    /* public search<T>(req: HttpRequestParams): Observable<T> {
        return this.request<T>(Object.assign({
            method: 'SEARCH'
        }, req));
    } */
}
