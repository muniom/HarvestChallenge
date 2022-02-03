import { BaseModel } from 'src/app/_shared/models/_base.model';


export class BaseCriteriaSelectionModel extends BaseModel {
    constructor(data?: BaseCriteriaSelectionModel, dictionary: any = {}) {
        super(data, dictionary); // console.log('BaseCriteriaSelectionModel', this)
    }

    public isDetailed?: boolean;
}
