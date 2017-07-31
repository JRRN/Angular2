import { Component } from '@angular/core';
import { Observable} from 'rxjs/Rx';


import { TaskService } from '../app/services/task.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Working with Api in Angular 2';

  constructor(private taskService:TaskService){
  }
}
