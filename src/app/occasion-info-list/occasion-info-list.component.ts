import { Component, OnInit, Input } from '@angular/core';
import { OccasionService } from '../services/occasion.service';

@Component({
  selector: 'app-occasion-info-list',
  templateUrl: './occasion-info-list.component.html',
  styleUrls: ['./occasion-info-list.component.scss']
})
export class OccasionInfoListComponent implements OnInit {

  @Input() public occasions

  constructor(private occasionService: OccasionService) { }

  ngOnInit() {
  }

  deleteOccasion(occasion)
  {
    console.log("delete occasion ");
    console.log(occasion)

    this.occasionService.deleteOccasion(occasion).subscribe(
      result=>{
        this.occasionService.onDBEvent.next("reload")
      }
    )

  }

}
