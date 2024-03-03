class Cheeks {
    constructor(name, species) {
      this.name = name || 'Cheeky';
      this.species = species || 'Hamster';
      this.cheekinessLevel = 100;
    }
  
    squishCheeks() {
      if (this.cheekinessLevel > 0) {
        console.log(`${this.name} the ${this.species} is getting its cheeks squished!`);
        this.cheekinessLevel -= 15;
      } else {
        console.log(`${this.name}'s cheeks can't be squished anymore - too adorable!`);
      }
      this.displayCheekiness();
    }
  
    puffCheeks() {
      console.log(`${this.name} the ${this.species} is puffing up its cheeks!`);
      this.cheekinessLevel += 10;
      this.displayCheekiness();
    }
  
    displayCheekiness() {
      console.log(`${this.name}'s cheekiness level: ${this.cheekinessLevel}`);
    }
  }
  
  // Example usage
  const fluffyCheeks = new Cheeks('Fluffster', 'Hamster');
  const chubbyCheeks = new Cheeks('Chubster', 'Guinea Pig');
  
  fluffyCheeks.squishCheeks();
  chubbyCheeks.puffCheeks();
  