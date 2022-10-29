import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([0, 2, -20, 76]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection("sdjfbCD");

charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-18);
linkedList.add(-3);
linkedList.add(4);

linkedList.sort();
linkedList.print();
