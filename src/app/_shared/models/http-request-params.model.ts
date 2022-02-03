import { HttpHeaders, HttpResponse } from '@angular/common/http';

export interface HttpRequestParams {
    method?: string;
    url: string;
    isExternal?: boolean;
    body?: any;
    query?: any;
    headers?: HttpHeaders;
    observe?: 'body' | 'response';
}
