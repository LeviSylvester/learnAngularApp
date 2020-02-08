import {Component, OnInit, OnChanges, Input} from '@angular/core';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit, OnChanges {
  @Input() items;
  dogsFledTheScene;
  title = 'show/hide';

  isActive = true;

  constructor() {
  }

  ngOnInit() {
    this.dogsFledTheScene = this.items.length < 2 && this.isActive;
    console.log('test text', this.dogsFledTheScene);
  }

  ngOnChanges() {
    this.dogsFledTheScene = this.items.length < 2 && this.isActive;
    console.log('mesaj', this.items.length);
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngDoCheck() {
    this.dogsFledTheScene = this.items.length < 2 && this.isActive;
    console.log('mesaj2', this.items.length);
  }


  handleClickEvent() {
    // console.log("Click me! button was clicked");
    this.isActive = !this.isActive;
    if (this.isActive) {
      this.title = 'hide';
    } else {
      this.title = 'show';
    }
    this.dogsFledTheScene = this.items.length < 2 && this.isActive;
  }

}
