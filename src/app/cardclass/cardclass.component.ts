import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IModelCardClass } from '../model/IModelCardClass';

@Component({
  selector: 'cardclass',
  templateUrl: './cardclass.component.html',
  styleUrls: ['./cardclass.component.css']
})
export class CardclassComponent implements OnInit {

  @Input()
  card4class: IModelCardClass;
  @Output()
  whatisclass = new EventEmitter<IModelCardClass>();

  constructor() { }

  ngOnInit() {
  }

  passtheevent(card4class: IModelCardClass){
    this.whatisclass.emit(this.card4class);
  }

}
