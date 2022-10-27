import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";

const numbersCollection = new NumbersCollection([0, 2, -20, 76]);
const sorter = new Sorter(numbersCollection);
sorter.sort();

console.log(numbersCollection.data);
