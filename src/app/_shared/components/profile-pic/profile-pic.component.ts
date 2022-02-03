import { Input, Component, ViewEncapsulation } from '@angular/core';
import { UserModel } from 'src/app/users/models/user.model';

@Component({
    selector: 'profile-pic',
    templateUrl: 'profile-pic.component.html',
    styleUrls: [ './profile-pic.component.scss' ],
    encapsulation: ViewEncapsulation.None
})
export class ProfilePicComponent {

    @Input() public user: UserModel;

    public hidePic: boolean;

    public userInitials: string;

    public backgroundColor: string;

    generate() {
        this.hidePic = true;
        // if (!this.user.firstName || !this.user.lastName) return;
        this.userInitials = (() => {
            if (this.user.firstName && this.user.lastName)
                return this.user.firstName.split('')[0].toUpperCase() + this.user.lastName.split('')[0].toUpperCase();
            if (this.user.name)
                return this.user.name.split('')[0].toUpperCase();
        })();

        this.backgroundColor = '#' + backgroundColors[this.userInitials[0].toLowerCase()];
    }
}

const backgroundColors = {
    a: '05B64A',
    b: '09B151',
    c: '0EAD58',
    d: '12A860',
    e: '16A467',
    f: '1A9F6E',
    g: '1F9B75',
    h: '23967D',
    i: '279284',
    j: '2C8D8B',
    k: '308892',
    l: '34849A',
    m: '387FA1',
    n: '3D7BA8',
    o: '4176AF',
    p: '4572B7',
    q: '496DBE',
    r: '4E68C5',
    s: '5264CC',
    t: '565FD4',
    u: '5B5BDB',
    v: '5F56E2',
    w: '6352E9',
    x: '674DF1',
    y: '6C49F8',
    z: '7044FF'
};
