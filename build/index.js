"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const CharactersCollection_1 = require("./CharactersCollection");
// const numbersCollection = new NumbersCollection([0, 2, -20, 76]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);
const charactersCollection = new CharactersCollection_1.CharactersCollection("sdjfbCD");
const sorter = new Sorter_1.Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);
