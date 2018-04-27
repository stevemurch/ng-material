import { Component } from '@angular/core';
import { OccasionService } from './services/occasion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  public occasions;

  constructor(private occasionService: OccasionService)
  {}

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
