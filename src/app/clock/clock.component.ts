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

    const CLOCK_OPTIONS = {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    };

    const DATE_OPTIONS = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: '2-digit',
    };

    setInterval(() => {
      this.curr_time = new Date().toLocaleTimeString('us-EN', CLOCK_OPTIONS);
      this.curr_date = new Date().toLocaleDateString('us-EN', DATE_OPTIONS);

      hrPosition = hrPosition + (3 / 360);
      minPosition = minPosition + (6 / 60);
      secPosition = secPosition + 6;

      // this.HOURHAND.nativeElement.style.transform = 'rotate(' + hrPosition + 'deg)';
      // this.MINUTEHAND.nativeElement.style.transform = 'rotate(' + minPosition + 'deg)';
      // this.SECONDHAND.nativeElement.style.transform = 'rotate(' + secPosition + 'deg)';
    }, 1000);
  }
}
