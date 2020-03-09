names = ["Piotr", "Anna", "Michał", "Paulina", "Mateusz", "Magda"];

class Students {
  constructor(names) {
    this.names = names;
  }

  startWith(letter) {
    // names (array) which starts with the letter
    let namesStartingWithLetter = this.names.filter(
      name => name.charAt(0) == letter
    );
    return namesStartingWithLetter;
  }

  sort() {
    // names (array) in alphabetical order
    let sortedNames = this.names.sort();
    return sortedNames;
  }

  get() {
    // names (array) in natural order
    return this.names;
  }

  getFirst(n) {
    // get first 'n' names (array)
    let slicedArray = this.names.slice(0, n);
    return slicedArray;
  }
}

students = new Students(names);
console.log(students.get());
console.log(students.sort());
console.log(students.startWith("P"));
console.log(students.startWith("M").sort());
console.log(students.sort().getFirst(4));
console.log(
  students
    .startWith("M")
    .sort()
    .getFirst(2)
);
console.log(students.get());
