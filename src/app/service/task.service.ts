import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../class/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private taskList = new BehaviorSubject(null);
  public currTaskList = this.taskList.asObservable();

  private taskHistory = new BehaviorSubject(null);
  public currTaskHistory = this.taskHistory.asObservable();

  constructor() { }

  updateTaskList(tl: Task[]) {
    this.taskList.next(tl);
  }

  updateTaskHistory(th: Task[]) {
    this.taskHistory.next(th);
  }
}
