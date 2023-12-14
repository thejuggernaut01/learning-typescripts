class Doggy {
  constructor(public name: string, public age: number) {}
}

const bravo = new Doggy("Bravo", 12);
console.log(bravo);

class DogList {
  private doggies: Doggy[] = [];

  static instance: DogList = new DogList();

  private constructor() {}

  static addDog(dog: Doggy) {
    this.instance.doggies.push(dog);
  }
  getDogs() {
    return this.doggies;
  }
}
DogList.addDog(bravo);
console.log(DogList.instance.getDogs());
