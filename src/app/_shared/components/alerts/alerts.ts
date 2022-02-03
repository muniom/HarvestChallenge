import { expandInOut } from '../../animations';

type AlertType = 'success' | 'info' | 'warning' | 'error';
export interface AlertMessages {
    success?: string;
    info?: string;
    warning?: string;
    error?: string | any;
}

/* Used in:
        - BaseComponent
        - AlertsComponent
*/
export class Alerts {
    public messages: AlertMessages = {};

    public set(type: AlertType, message: any) {
        // this.messages[type] = message;
        this.messages = Object.assign({}, this.messages, { [type]: message });
        // if (this.ionSlides) this.ionSlides.updateAutoHeight();
        return null;
    }

    public get(type: AlertType) {
        return this.messages[type];
    }

    public reset() {
        delete this.messages.success;
        delete this.messages.info;
        delete this.messages.warning;
        delete this.messages.error;
    }
}
