import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  @ViewChild('hour') HOURHAND: ElementRef;
  @ViewChild('minute') MINUTEHAND: ElementRef;
  @ViewChild('second') SECONDHAND: ElementRef;

  public date = new Date();
  public hr = this.date.getHours();
  public min = this.date.getMinutes();
  public sec = this.date.getSeconds();

  public curr_time = '';
  public curr_date = '';

  constructor() { }

  ngOnInit() {
    let hrPosition = (this.hr * 360 / 12) + (this.min * (360 / 60) / 12);
    let minPosition = (this.min * 360 / 60) + (this.sec * (360 / 60) / 60);
    let secPosition = this.sec * 360 / 60;

    setInterval(() => {
      this.curr_time = this.getCurrentTime();
      this.curr_date = this.getCurrentDate();

      hrPosition = hrPosition + (3 / 360);
      minPosition = minPosition + (6 / 60);
      secPosition = secPosition + 6;

      this.HOURHAND.nativeElement.style.transform = 'rotate(' + hrPosition + 'deg)';
      this.MINUTEHAND.nativeElement.style.transform = 'rotate(' + minPosition + 'deg)';
      this.SECONDHAND.nativeElement.style.transform = 'rotate(' + secPosition + 'deg)';
    }, 1000);
  }

  getCurrentTime() {
    const date = new Date();
    return this.formatDateTime(date.getHours())
      + ':' + this.formatDateTime(date.getMinutes())
      + ':' + this.formatDateTime(date.getSeconds());
  }

  getCurrentDate() {
    const date = new Date();
    return this.formatDateTime(date.getMonth() + 1)
      + '/' + this.formatDateTime(date.getDate())
      + '/' + this.formatDateTime(date.getFullYear());
  }

  formatDateTime(num: Number) {
    if (num < 10) {
      return '0' + num;
    }
    return String(num);
  }
}
