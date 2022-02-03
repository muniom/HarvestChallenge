
export interface Dictionary<T> {
    [key: string]: T; // DictionaryDefinition;
}

export class DictionaryDefinition {
    constructor(data?: string | any, dictionary?: Dictionary<any>) { // console.log('DictionaryDefinition', data, dictionary);
        if (data === null || data === undefined) return;
        switch (typeof data) {
            case 'object':
                Object.assign(this, data);
                break;
            case 'string':
            case 'number':
                Object.values(dictionary).some((definition: DictionaryDefinition) => { // console.log(key);
                    if (data === definition.code
                        || data === definition.index
                        || data === definition.key) {
                        Object.assign(this, definition);
                        return true;
                    } // else console.log('DictionaryDefinition', data, dictionary);
                });
                break;
        }
    }

    key?: string;
    code?: string | number;
    label?: string;
    icon?: string;
    index?: number;
    [key: string]: any;
    
    static isClass = true;
}
