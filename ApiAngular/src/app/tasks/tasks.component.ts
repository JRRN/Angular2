import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor() { }
  tasks: Array<Object>;
  ngOnInit() {
    this.getTask();
  }

  getTask(): void {
    // this.http.request('http://localhost:8080/api/lista')
    // .subscribe((response: Response) => {
    //    this.tasks = response.json(); 
    // });
  }
}
