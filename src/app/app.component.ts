import { Component } from '@angular/core';
import { OccasionService } from './services/occasion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
 

  constructor(private occasionService: OccasionService)
  {}

  ngOnInit()
  {

  }
}
