import { BaseModel } from '../../_shared/models/_base.model';


export class UserFilterModel extends BaseModel {
    constructor(data?: UserFilterModel) {
        super(data, {
        });
    }

    public query?: string;

    public userIds?: number[];
}
