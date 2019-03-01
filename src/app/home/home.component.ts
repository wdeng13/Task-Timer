import { Component, OnInit } from '@angular/core';
import { Task } from '../class/task';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const task1 = new Task('task1');
    setTimeout(function () {
      task1.setEndTime();
      console.log(task1);
      console.log(task1.getDateString());
      console.log(task1.getStartTimeString());
      console.log(task1.getEndTimeStrintg());
      console.log(task1.getDuration());
    }, 5000);
  }

}
