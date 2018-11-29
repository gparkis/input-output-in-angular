import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import { IModelCardClass } from './model/IModelCardClass';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  angclass1 = COURSES[0];
  angclass2 = COURSES[1];
  angclass3 = COURSES[2];

  onWhatIsClass(card4class: IModelCardClass){
    console.log(card4class);
  }

}
