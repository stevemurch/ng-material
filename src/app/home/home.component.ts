import { Component, OnInit } from '@angular/core';
import { OccasionService } from '../services/occasion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private occasionService: OccasionService) { }

  public occasions;

  ngOnInit()
  {
    this.getOccasions()
  }
  
  getOccasions()
  {
    this.occasionService.getAll().subscribe(
            data => { 
              this.occasions = data
              console.log(this.occasions)

            },
            err => console.error(err),
            () => console.log('done loading foods')
          );
  }

}
