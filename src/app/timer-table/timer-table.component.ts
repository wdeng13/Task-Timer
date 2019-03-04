import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Task } from '../class/task';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-timer-table',
  templateUrl: './timer-table.component.html',
  styleUrls: ['./timer-table.component.css']
})
export class TimerTableComponent implements OnInit {
  public taskList: Task[] = [];
  public taskHistory: Task[] = [];

  displayedColumns: string[] = ['name', 'startTime', 'endTime', 'duration', 'btn'];
  dataSource: MatTableDataSource<Task>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @Input() tableType: string;

  constructor(private _taskService: TaskService) {

  }

  ngOnInit() {
    if (this.tableType === 'Ongoing Task') {
      this._taskService.currTaskList.subscribe(tl => {
        this.taskList = tl;
        console.log('Ongoing', this.taskList);
        // Assign the data to the data source for the table to render
        this.dataSource = new MatTableDataSource(this.taskList);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    } else if (this.tableType === 'History') {
      this._taskService.currTaskHistory.subscribe(tl => {
        this.taskHistory = tl;
        console.log('History', this.taskHistory);
        // Assign the data to the data source for the table to render
        this.dataSource = new MatTableDataSource(this.taskHistory);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    }
    this._taskService.currTaskHistory.subscribe(tl => {
      if (tl) {
        this.taskHistory = tl;
      }
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  endTaskTime(tName: string) {
    const task = this.taskList.find(tk => tk.name === tName);
    task.setEndTime();
    this.taskHistory.push(task);
    this.taskList.splice(this.taskList.indexOf(task), 1);
    this._taskService.updateTaskList(this.taskList);
    this._taskService.updateTaskHistory(this.taskHistory);
  }
}
