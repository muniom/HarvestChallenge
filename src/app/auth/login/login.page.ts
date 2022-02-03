import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

import { AuthService } from '../auth.service';
import { validateForm } from '../../_shared/helpers/forms';
import { BaseComponent } from '../../_shared/components/base.component';


@Component({
    selector: 'app-login',
    templateUrl: 'login.page.html',
    styleUrls: ['login.page.scss'],
})
export class LoginPage extends BaseComponent implements OnInit {
    constructor(
        @Inject(DOCUMENT) private document: Document,
        private router: Router,
        private storageService: Storage,
        public authService: AuthService
    ) { super(); }

    public isInitialised: boolean;

    async ngOnInit() {
        super.ngOnInit();
        await this.startLoading('full');
        await this.autoLogin();
        this.onLoginComplete();
        this.stopLoading('full');
        this.isInitialised = true;
    }

    public async autoLogin() { console.log('autoLogin');
        try {
            // LocalStored Token
            const existingToken = await this.storageService.get('Authorization');
            if (existingToken) await this.authService.login('token', existingToken);
            else {
                // Read Oath callback query params
                const queryParams: any = ((this.document.location.hash || '').split('?')[1] || '').split('&').map(val => val.split('=')).reduce((mem, val) => {
                    mem[val[0]] = val[1];
                    return mem;
                }, {});

                if (queryParams.oauth) { // Ouath Callback
                    await this.authService.login(queryParams.oauth, queryParams.code);
                }
            }
        } catch (error) { console.warn(error);
            this.alerts.set('error', error);
        }
    }

    private async onLoginComplete() {
        if (!this.authService.user) return;
        const redirectUrl = this.authService.redirectUrl || '';
        delete this.authService.redirectUrl;
        return this.router.navigate([redirectUrl]);
    }

    // Sign-In
    // public signInTab: number = 0;
    // @ViewChild('signInForm', { static: false }) signInForm: NgForm;
    public signIn = new class SignIn extends BaseComponent {
        constructor(
            private parent: LoginPage
        ) { super(); }

        public form = new FormGroup({
            email: new FormControl('test@email.com', Validators.required),
            password: new FormControl('test', Validators.required),
            rememberMe: new FormControl(true)
        });

        async submit() {
            // Validate
            this.alerts.reset();
            if (!validateForm(this.form)) return;

            // Go
            await this.startLoading();
            await this.parent.authService.login('credentials', this.form.value)
                .then(() => this.parent.onLoginComplete())
                .catch(error => this.alerts.set('error', error));
            await this.stopLoading();
        }
    }(this);

    /* @ViewChild('signUpForm', { static: false }) signUpForm: NgForm;
    public signUp = new class Credential extends BaseComponent {
        constructor(
            private parent: LoginPage
        ) { super(); }

        async submit() {
            // Validate
            this.alerts.reset();
            if (!validateForm(this.parent.signUpForm.form)) return;

            await this.startLoading();
            await this.parent.authService.signUp(this.parent.signUpForm.value)
                .then(() => this.parent.onLoginComplete())
                .catch(error => this.alerts.set('error', error));
            await this.stopLoading();
        }
    }(this); */
}
