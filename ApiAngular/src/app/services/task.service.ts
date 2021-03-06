import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable} from 'rxjs/Rx'; 

import { Task } from '../models/task';
import 'rxjs/add/operator/map';

@Injectable()
export class TaskService {  
   baseURL:string='https://localhost:8080/Lista';

   constructor(private http:Http){
   } 

   getTask(): Observable<Task[]> {
        return this.http.get(this.baseURL)
                .map(this.extractTask)
                .catch(this.handleError)
   }

   private extractTask(res: Response) {
        return <Task[]>res.json();
   }
  
   private handleError(error:Response|any){

        let errMsg: string;
        if (error instanceof Response) {
                const body = error.json() || '';
                const err = body.error || JSON.stringify(body);
                errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
                errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
   } 

}