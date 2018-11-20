import { Component, OnInit, Optional } from '@angular/core';
import { DataService } from '../_services/data.service';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import {MatIconRegistry} from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('goals',[
      transition('* => *',[
        query(':enter', style({ opacity : 0 }), {optional : true})
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  itemcount : number; 
  btntxt : string = "Add an item";
  goaltext : string = "Type your goal";
  goals = [];
  constructor(private _data : DataService) {
      
   }

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res);   
    this.itemcount = this.goals.length;
    this._data.changeGoal(this.goals);
  }

  addItem(){
    this.goals.push(this.goaltext);
    this.goaltext = "";
    this.itemcount = this.goals.length;
    this._data.changeGoal(this.goals);
    
  }

  removeItem(i){
    this.goals.splice(i,1);
    this.itemcount = this.goals.length;    
    this._data.changeGoal(this.goals);    
  }

}
