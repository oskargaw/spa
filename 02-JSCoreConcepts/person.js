class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  displayName() {
    console.log(
      `${this.name.charAt(0).toUpperCase()}${this.name.slice(
        1
      )} ${this.surname.toUpperCase()}`
    );
  }
}

person = new Person("Jan", "Nowak");
person.displayName();
