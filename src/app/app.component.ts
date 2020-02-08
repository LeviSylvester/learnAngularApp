import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'learn Angular';

  animalinput: string;
  plantinput: string;
  carinput: string;

  animals = [/*{id: 1, name: 'dog'},*/
    {id: 1, name: 'cat'}];

  plants = [{id: 1, name: 'flower'},
    {id: 2, name: 'tree'}];

  cars = [{id: 1, name: 'racecar'},
    {id: 2, name: 'sedan'}];

  addAnimals() {
    // this.animals.push({id: this.animals.length + 1, name: 'dog'});

    this.animals.push({id: this.animals.length + 1, name: this.animalinput});
    this.animalinput = '';
  }

  removeAnimals() {
    // alert(this.animals.length);
    if (this.animals.length > 0) {
      this.animals.splice(this.animals.length - 1, 1);
    }
  }

  addPlants() {
    // this.plants.push({id: this.plants.length + 1, name: 'flower'});
    this.plants.push({id: this.plants.length + 1, name: this.plantinput});
    this.plantinput = '';
  }

  removePlants() {
    if (this.plants.length > 0) {
      this.plants.splice(this.plants.length - 1, 1);
    }
  }

  addCars() {
    // this.cars.push({id: this.cars.length + 1, name: 'sportscar'});
    this.cars.push({id: this.cars.length + 1, name: this.carinput});
    this.carinput = '';
  }

  removeCars() {
    if (this.cars.length > 0) {
      this.cars.splice(this.cars.length - 1, 1);
    }
  }

}
