import { HttpErrorResponse } from '@angular/common/http';

export class HttpError extends Error {
    constructor(error: HttpErrorResponse, alternate: string) { super(alternate);
        this.error = error;
        this.message = (() => {
            switch (typeof error) {
                case 'string':
                    return error;
                case 'object':
                    // if (error.error instanceof ProgressEvent)
                    //     return alternate + ' - No Response';
                    // else
                    if (error instanceof HttpErrorResponse) {
                        if (error.status === 0)
                            return alternate + ' - No Response';
                        else if (error.status === 500)
                            return alternate;
                        else
                            return error.error || alternate;
                    } else debugger;
                    return alternate;
            }
        })();
    }

    public error: any;
}
