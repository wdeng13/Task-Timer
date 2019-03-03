import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Task } from '../class/task';
import { TaskService } from '../service/task.service';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

/** Constants used to fill up our data base. */
const COLORS: string[] = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES: string[] = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

/**
 * @title Data table with sorting, pagination, and filtering.
 */

@Component({
  selector: 'app-timer-table',
  templateUrl: './timer-table.component.html',
  styleUrls: ['./timer-table.component.css']
})
export class TimerTableComponent implements OnInit {
  public taskList: Task[];

  displayedColumns: string[] = ['name', 'startTime', 'endTime', 'duration'];
  dataSource: MatTableDataSource<Task>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private _taskService: TaskService) {

  }

  ngOnInit() {
    this._taskService.currTaskList.subscribe(tl => {
      this.taskList = tl;
      console.log(this.taskList);
      // Assign the data to the data source for the table to render
      this.dataSource = new MatTableDataSource(this.taskList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
