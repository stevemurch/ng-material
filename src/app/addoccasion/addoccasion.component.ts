import { Component, OnInit } from '@angular/core';
import { Occasion } from '../models/occasion';
import { OccasionService } from '../services/occasion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addoccasion',
  templateUrl: './addoccasion.component.html',
  styleUrls: ['./addoccasion.component.scss']
})
export class AddOccasionComponent implements OnInit {

  public editorContent: string = 'My Document\'s Title'

  constructor(private router: Router, private occasionService: OccasionService) { }

  occasion = new Occasion(new Date());

  ngOnInit(): void {
  }
  

  onSubmit() {
    alert(this.editorContent);

    this.occasionService.addOccasion(this.occasion).subscribe(
      complete=>{
        this.router.navigateByUrl('/');
        this.occasionService.onDBEvent.next("reload")
      }
    );

  }
}
