import { Component, OnInit } from '@angular/core';
import { TaskService } from '../service/task.service';
import { Task } from '../class/task';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  public taskHistory: Task[] = [];

  constructor(private _taskService: TaskService) { }

  ngOnInit() {
    this._taskService.currTaskHistory.subscribe(th => {
      if (th) {
        this.taskHistory = th;
      }
    });
  }

}
