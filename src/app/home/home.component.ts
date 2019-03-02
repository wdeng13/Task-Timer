import { Component, OnInit } from '@angular/core';
import { Task } from '../class/task';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public taskName: string;
  public taskList: Task[] = [];

  constructor() { }

  ngOnInit() {

  }

  updateTask(tName: string) {
    let task: Task;
    if (this.taskList) {
      task = this.taskList.find(tk => tk.name === tName);
      if (task) {
        task.setEndTime();
      } else {
        task = new Task(tName);
        this.taskList.push(task);
      }
    } else {
      task = new Task(tName);
      this.taskList.push(task);
    }
    console.log(task);
    console.log(this.taskList);
    this.taskName = '';
    window.location.href = '#table';
  }
}
