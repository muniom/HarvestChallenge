export class BaseModel<T = any> {
    constructor(
        data: any = {},
        dictionary: any = {},
        defaults: T = data as T,
        forApi?: boolean // Prevent assigning unknown props
    ) { // console.log('BaseClass', data);
        // if (!data) return;
        const mergedKeys = [...Object.keys(defaults)]; // , ...Object.keys(dictionary)];
        mergedKeys.forEach((key: string) => {
            if (data[key] === null || data[key] === '\u0000') return;

            if (forApi && !(key in defaults)) return;

            this[key] = (() => { // console.log(key, data[key]);
                const modelMapper = (constructor, model) => {
                    if (constructor.name === 'Date') // Dates require only 1 param
                        return new constructor(model);
                    else if (constructor.isClass) // Class // model.constructor.name
                        return new constructor(model, dictionary);
                    else { // Function
                        const result = constructor(model, dictionary);
                        if (typeof result === 'object' && !Object.keys(result).length)
                            return undefined;
                        return result;
                    }
                };

                if (Array.isArray(dictionary[key])) {
                    return data[key].map(item => modelMapper(dictionary[key][0], item));
                } else if (dictionary[key] instanceof Function) {
                    return modelMapper(dictionary[key], data[key]);
                } else { // Plain value
                    return data[key] || defaults[key];
                }
            })();
        }); // console.log('BaseModel', this);
    }

    static isClass = true;
}
