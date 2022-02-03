import { Input, Component, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { get } from 'lodash-es';

import { expandInOut } from '../../animations';
import { AlertMessages } from './alerts';


@Component({
    selector: 'alerts',
    templateUrl: 'alerts.component.html',
    styleUrls: [ './alerts.component.scss' ],
    animations: [ expandInOut() ]
    // encapsulation: ViewEncapsulation.None
})
export class AlertsComponent implements OnChanges {
    @Input() public loading: boolean;

    @Input() public messages: AlertMessages;

    @Output() public change: EventEmitter<void> = new EventEmitter();

    ngOnChanges(changes: SimpleChanges) {
        if (get(changes, 'messages.currentValue.error'))
            console.error(this.messages);
        // else console.log('alerts', this.messages);
        
        setTimeout(() => { // Animation
            this.change.emit();
        }, 300);
    }
}
