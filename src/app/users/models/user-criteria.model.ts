import { BaseCriteriaModel } from 'src/app/_shared/models/base-criteria.model';
import { UserFilterModel } from './user-filter-model';


export class UserCriteriaModel extends BaseCriteriaModel {
    constructor(data?: UserCriteriaModel) {
        super(data, {
            filter: UserFilterModel
        }); // console.log('UserCriteriaFilterModel', this);
    }

    public filter?: UserFilterModel;
}
