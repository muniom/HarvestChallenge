import { FormGroup } from '@angular/forms';

export function validateForm(form: FormGroup): boolean {
    form.updateValueAndValidity({
        // emitEvent: false
    });
    form.markAllAsTouched();
    /* for (let control of Object.values(form.controls)) {
        control.markAllAsTouched();
    } */
    return form.valid;
}
