import { Directive, HostBinding, AfterViewInit, ContentChild, Input, ElementRef, Renderer2 } from '@angular/core';
// import { DOCUMENT } from '@angular/common';
import { FormControl, FormGroup, NgForm, NgModel } from '@angular/forms';
import { AutofillMonitor } from '@angular/cdk/text-field';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Directive({
    selector: '[validation]'
})
export class ValidationDirective implements AfterViewInit {
    constructor(
        // private document: Document,
        // @Host() private ionItem: IonItem
        // @Host() @Optional() @SkipSelf() private ngForm: NgForm,
        private autofillMonitor: AutofillMonitor,
        private elementRef: ElementRef,
        private renderer: Renderer2
    ) { }

    @Input('validation') formControlName: string;
    formControl: FormControl;
    ngModelElement: HTMLInputElement;
    errorsDiv: HTMLElement;

    @ContentChild(NgModel, {
        static: true
    }) ngModel: NgModel;

    ngAfterViewInit() {
        setTimeout(() => { // console.log(this);
            this.formControl = this.ngModel.control; // this.ngForm.form.get(this.formControlName) as FormControl;
            this.ngModelElement = this.elementRef.nativeElement.querySelector('[ngModel]');

            this.fixOnTouch();

            // Show errors
            this.formControl.statusChanges
            .pipe(debounceTime(10))
            .subscribe(val => { // console.log(val);
                this.showErrors();
            });

            // Instantly hide when dirty
            fromEvent(this.ngModelElement, 'keyup')
            .pipe(debounceTime(10))
            .subscribe((event: KeyboardEvent) => {
                this.onUpdate();
            });

            // AutoFill Validation Fix
            /* this.autofillMonitor.monitor(this.ngModelElement)
            .pipe(debounceTime(100))
            .subscribe((event) => { alert('autofilled');
                // if (!event.isAutofilled) return;
                this.formControl.markAsDirty();
                this.onUpdate(true);
            }); */
        });
    }

    showErrors() { // console.log('showErrors');
        const errors = Object.entries(this.formControl.errors || {}).map(([key, val]) => {
           switch (key) {
                case 'minlength':
                    return 'More than ' + val.requiredLength + ' characters are required';
                case 'required':
                    return 'This field is required';
                case 'email':
                    return 'A valid email address is required';
                default:
                    return key;
           }
        });

        // Parent container
        if (!errors.length) {
            this.isInvalid = false;
            if (this.errorsDiv) {
                this.errorsDiv.remove();
                // this.renderer.destroyNode(this.errorsDiv);
                delete this.errorsDiv;
            }
            return;
        } else if (!this.errorsDiv) {
            this.errorsDiv = this.renderer.createElement('div'); // div');
            this.renderer.appendChild(this.elementRef.nativeElement, this.errorsDiv);
            this.errorsDiv.setAttribute('style', `
                width: 100%;
                margin: 0 0 5px
            `);
            this.formControl.markAsDirty();
        } else {
            while (this.errorsDiv.firstChild) this.errorsDiv.removeChild(this.errorsDiv.lastChild);
        }

        // Inject errors
        errors.forEach(error => {
            const errorChip = this.renderer.createElement('div');
            errorChip.setAttribute('color', 'danger');
            errorChip.setAttribute('style', `
                display: flex;
                height: 25px;
                border-radius: 5px;
                padding: 0 10px;
                margin: 0 0 5px
            `);
            errorChip.innerHTML = error;
            this.renderer.appendChild(this.errorsDiv, errorChip);
        });
    }

    onUpdate(force?: boolean) { // console.log('onUpdate', this.formControl.dirty);
        // if (!this.errorsDiv) return;
        // if (!this.formControl.dirty && !force) return;
        if (!this.formControl.touched) return; // AutoFill Fix

        this.formControl.setValue(this.ngModelElement.value, {
            emitModelToViewChange: false,
            emitViewToModelChange: false,
            emitEvent: false
        });
        this.formControl.updateValueAndValidity(); // { emitEvent: false });
        // console.log('onUpdate', this.formControl.validator(this.formControl), this.ngModel.control.validator(this.formControl));
    }

    // Ensure calling markAsTouched adds the correct css class to the IonItem
    @HostBinding('class.ion-invalid') isInvalid: boolean;
    @HostBinding('class.ion-touched') isTouched: boolean;
    fixOnTouch() {
        const origMarkAsTouched = this.formControl.markAsTouched;
        this.formControl.markAsTouched = (args) => { // console.log('markAsTouched');
            origMarkAsTouched.call(this.formControl, args);
            this.formControl.updateValueAndValidity({
                // onlySelf: true,
                // emitEvent: false
            });
            this.isTouched = this.formControl.touched;
            // this.showErrors();
        };
    }
}
