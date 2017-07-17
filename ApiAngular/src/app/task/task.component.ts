import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { Task } from '../models/task';



@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor(private http: Http) { }
  private apiUrl = 'http://localhost:8080/api/lista';

  ngOnInit() {
    this.getTasks();
    this.addTask('');
  }

  getTasks(): Observable<Task> {
     return this.http.get(this.apiUrl)
                      .map((res: Response) => res.json())
                      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  addTask (body: Object): Observable<Task[]> {
        const bodyString = JSON.stringify(body); // Stringify payload
        const headers  = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        const options  = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.post(this.apiUrl, body, options) // ...using post request
                         .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
                         .catch((error: any) => Observable.throw(error.json().error || 'Server error')); // ...errors if any
  }
removeComment (id:string): Observable<Comment[]> {
        return this.http.delete(`${this.commentsUrl}/${id}`) // ...using put request
                         .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    } 

}
