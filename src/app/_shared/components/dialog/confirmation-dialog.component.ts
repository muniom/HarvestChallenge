import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { BaseComponent } from '../base.component';


@Component({
    selector: 'app-confirm-dialog',
    templateUrl: './confirmation-dialog.component.html',
    styleUrls: ['./confirmation-dialog.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ConfirmDialogComponent extends BaseComponent {
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: {
            title: string,
            msg: string,
            onClose?: (response: boolean) => Promise<any>
        },
        private dialogRef: MatDialogRef<ConfirmDialogComponent>
    ) { super(); }

    async respond(response: boolean) {
        this.startLoading();
        if (this.data.onClose) await this.data.onClose(response);
        this.stopLoading();
        this.dialogRef.close(response);
    }
}