export class GroupedArray<T> extends Array<Group<T>> {
    constructor(props: {
        getKey: (result: T) => number;
        getLabel: (result: T) => string;
    }) {
        super(); // console.log('GroupedArray', this);
        Object.assign(this, props);
    }

    // public hasNoMore?: boolean;
    public positions?: { [key: number]: number } = {};

    private getKey: (result: T) => number;
    private getLabel: (result: T) => string;

    public merge(results: any[]) {
        // if (!results.length) this.hasNoMore = true;
        results.forEach(result => {
            const key = this.getKey(result);
            this.positions[key] = this.positions[key] || this.length + 1; // + 1 prevents 0 == null
            if (!this[this.positions[key] - 1]) {
                this[this.positions[key] - 1] = {
                    label: this.getLabel(result),
                    results: [result]
                };
            } else {
                this[this.positions[key] - 1].results.push(result);
            } // console.log('group', key, result);
        });
    }
}

interface Group<T> {
    label: string;
    results: T[];
}
