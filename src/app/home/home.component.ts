import { Component, OnInit } from '@angular/core';
import { OccasionService } from '../services/occasion.service';
import { EventEmitter } from 'events';

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
    this.occasionService.onDBEvent.subscribe(
      message=>{
        switch(message)
        {
          case "reload":
            this.occasionService.loadOccasionsData()
          break;
          case "display":
            this.occasions = this.occasionService.occasions
            this.displayOccasions(this.occasions)
          break;
        }
      }
    )

    this.occasionService.onDBEvent.next("reload")
    
  }

  

  displayOccasions(data)
  {
    this.occasions = data
  }
  
  

}
