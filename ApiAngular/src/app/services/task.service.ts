import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Task } from '../models/task';
import {TaskService} from '../services/task.service';
import { EmitterService } from '../../emitter.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


export class TaskComponent implements OnInit, OnChanges {
    ngOnChanges(changes: any) {
        EmitterService.get(this.).subscribe((task: Task[]) => {this.getTasks(); });
    }
    ngOnInit() {
        this.getTasks();
    }

    constructor(
        private taskService: TaskService
        ) {}

    task: Task[];
    // Input properties
    @Input() taskId: string;
    @Input() editId: string;

    

    

    //http://embed.plnkr.co/jfUIrVZyajLv8KnDrhL2/
}
