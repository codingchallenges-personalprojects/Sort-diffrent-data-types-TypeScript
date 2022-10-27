"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    constructor(colloction) {
        this.colloction = colloction;
    }
    sort() {
        const { length } = this.colloction;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.colloction.compare(j, j + 1)) {
                    this.colloction.swap(j, j + 1);
                }
            }
        }
    }
}
exports.Sorter = Sorter;
