import { BaseCriteriaModel } from './base-criteria.model';


export class BaseCriteriaRequestModel extends BaseCriteriaModel {
    constructor(data?: BaseCriteriaModel, dictionary: any = {}) {
        super(data, Object.assign({
            order: (val) => val.map(val => {
                delete val.label;
                return val;
            })
        }, dictionary)); // console.log('BaseCriteriaRequestModel', data, this);

        delete this.label;
        // delete this.hash;
    }
}
