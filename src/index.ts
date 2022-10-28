import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
// const numbersCollection = new NumbersCollection([0, 2, -20, 76]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();

// console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection("sdjfbCD");
const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);
