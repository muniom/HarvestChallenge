
// declare global {
    interface Date {
        origToJSON(): string;
    }
// }

// Preserve GMT offset when converting toJSON
Date.prototype.origToJSON = Date.prototype.toJSON;
Date.prototype.toJSON = function() {
    return new Date(this.toString().split('GMT')[0] + 'GMT+0000').origToJSON();
};
