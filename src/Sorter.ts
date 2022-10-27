import { NumbersCollection } from "./NumbersCollection";

export class Sorter {
  constructor(public colloction: NumbersCollection) {}
  sort(): void {
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
