import { trigger, state, style, animate, transition, stagger, query, group } from '@angular/animations';


export function expandInOut() {
    return trigger('expandInOut', [
        state('*', style({
            transform: 'scale(1)',
            height: '*',
            opacity: 1
        })),
        state('void', style({
            transform: 'scale(0)',
            height: 0,
            opacity: 0
        })),
        transition(':enter', [ animate('300ms ease-out') ]),
        transition(':leave', [ animate('300ms ease-in') ])
    ]);
}

export function routeAnimation() {
    return trigger('routeAnimation', [

        // end state styles for route container (host)
        state('*', style({
            position: 'absolute',
            top: 0,
            left: 0,
            // right: 0,
            // bottom: 0,
            // backgroundColor: 'rgba(0, 0, 0, 0.8)'
            opacity: 1,
            height: '100%'
        })),

        // route 'enter' transition
        transition(':enter', [
            style({
                opacity: 0,
            }),

            animate('.5s ease-in-out', style({
                opacity: 1,
            }))
        ]),

        // route 'leave' transition
        transition(':leave', [
            animate('.5s ease-in-out', style({
                opacity: 0,
            }))
        ])
    ]);
}

export function animateList() {
    return trigger('animateList', [
        // state('void', style({ transform: 'translateX(-100%)' })),

        transition('* => *', [
            query(':enter', [
                style({
                    opacity: 0,
                    /* height: 0,
                    padding: 0,
                    overflow: 'hidden' */
                }),
                stagger(1000, [
                    animate('1s', style({
                        opacity: .5,
                        // height: '*'
                    }))
                ])
            ], { optional: true })
        ])
    ]);
}
