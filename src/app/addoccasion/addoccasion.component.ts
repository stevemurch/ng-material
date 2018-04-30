import { Component, OnInit } from '@angular/core';
import { Occasion } from '../models/occasion';

@Component({
  selector: 'app-addoccasion',
  templateUrl: './addoccasion.component.html',
  styleUrls: ['./addoccasion.component.scss']
})
export class AddOccasionComponent implements OnInit {

  occasion = new Occasion();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    alert("Adding "+this.occasion.title)
  }
}
