import { BaseModel } from 'src/app/_shared/models/_base.model';
import { BaseCriteriaSelectionModel } from './base-criteria-selection.model';


export class BaseCriteriaModel extends BaseModel {
    constructor(data?: BaseCriteriaModel, dictionary: any = {}) {
        super(data, dictionary); // console.log('BaseCriteriaModel', this);

        if (!this.skip) this.skip = 0;
        if (!this.take) this.take = 3;
    }

    public label?: string; // Tab Label
    // public hash?: string; // Unique hash of filters to cache results by

    public filter?: any;
    public selection?: BaseCriteriaSelectionModel;
    public skip?: number;
    public take?: number;
    public hasNoMore?: boolean;

    public order?: [{
        label?: string;
        key: string;
        descending: boolean;
    }];

    public fetch?: (force?: boolean) => Promise<any>;
}
