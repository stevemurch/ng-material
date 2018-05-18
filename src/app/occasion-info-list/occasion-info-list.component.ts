import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-occasion-info-list',
  templateUrl: './occasion-info-list.component.html',
  styleUrls: ['./occasion-info-list.component.scss']
})
export class OccasionInfoListComponent implements OnInit {

  @Input() public occasions

  constructor() { }

  ngOnInit() {
  }

}
