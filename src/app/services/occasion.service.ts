import {Injectable, Output} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { EventEmitter } from 'events';
import { Subject } from 'rxjs/Subject';
 
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable()
export class OccasionService {
    
    @Output() onDBEvent: Subject<string> = new Subject()
    @Output() occasions: any

    constructor(private http:HttpClient) {
    }

    // Uses http.get() to load data from a single API endpoint
    getAll() {
        return this.http.get('http://localhost:50742/api/occasion');
    }

    deleteOccasion(occasion) {
      var result = this.http.delete('http://localhost:50742/api/occasion/'+occasion.id);
      return result
    }

    addOccasion(occasion):Observable<Object>{
        
        var occResult = this.http.post('http://localhost:50742/api/occasion', 
        occasion)
        
        return occResult
        //.map(res => res.json())
      }

      loadOccasionsData()
      {
        console.log("in loadOccasionsData")
        return this.getAll().subscribe(
                data => { 
                  this.occasions = data
                  
                },
                err => console.error(err),
                () => 
                {
                  console.log('got data, which is: ')
                  console.log(this.occasions)
                  this.onDBEvent.next("display")
                }
              );
        
      }

}
