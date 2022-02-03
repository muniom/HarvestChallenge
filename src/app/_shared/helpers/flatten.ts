export function flatten(val: object, nestedMem: any = {}, nestedKey?: string) {
    // nestedKey = nestedKey ? nestedKey + '.' : ''; console.log(nestedKey, val);
    if (val === null) {
        return;
    } else if (val instanceof Array) {
        val.forEach((val, index) => flatten(val, nestedMem, nestedKey +  '[' + index + ']'));
    } else if (typeof val === 'object') {
        Object.entries(val).forEach(([key, val]) => {
            flatten(val, nestedMem, (nestedKey ? nestedKey + '.' : '') + key);
        }); // console.log(nestedMem);
        return nestedMem;
    } else
        nestedMem[nestedKey] = val;
}
