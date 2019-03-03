import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../class/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private taskList = new BehaviorSubject(null);
  public currTaskList = this.taskList.asObservable();

  constructor() { }

  updateTaskList(tl: Task[]) {
    this.taskList.next(tl);
  }
}
