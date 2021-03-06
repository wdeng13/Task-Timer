import { Component, OnInit } from '@angular/core';
import { Task } from '../class/task';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public taskName: string;
  public taskList: Task[] = [];
  public taskHistory: Task[] = [];

  constructor(private _taskService: TaskService) { }

  ngOnInit() {
    this._taskService.currTaskList.subscribe(tl => {
      if (tl) {
        this.taskList = tl;
      }
    });
    this._taskService.currTaskHistory.subscribe(th => {
      if (th) {
        this.taskHistory = th;
      }
    });
  }

  updateTask(tName: string) {
    if (tName) {
      let task: Task;
      if (this.taskList) {
        task = this.taskList.find(tk => tk.name === tName);
        if (task) {
          task.setEndTime();
          this.taskHistory.push(task);
          this._taskService.updateTaskHistory(this.taskHistory);
          this.taskList.splice(this.taskList.indexOf(task), 1);
        } else {
          task = new Task(tName);
          this.taskList.push(task);
        }
      } else {
        task = new Task(tName);
        this.taskList.push(task);
      }
      this.taskName = '';
      // window.location.href = '#table';
      this._taskService.updateTaskList(this.taskList);
    }
  }
}
