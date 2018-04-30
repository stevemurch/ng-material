import { Component, OnInit } from '@angular/core';
import { Occasion } from '../models/occasion';
import { OccasionService } from '../services/occasion.service';

@Component({
  selector: 'app-addoccasion',
  templateUrl: './addoccasion.component.html',
  styleUrls: ['./addoccasion.component.scss']
})
export class AddOccasionComponent implements OnInit {

  occasion = new Occasion();

  constructor(private occasionService: OccasionService) { }

  ngOnInit(): void {
  }
  

  onSubmit() {
    alert("Adding "+this.occasion.title)
    this.occasionService.addOccasion(this.occasion);
  }
}
