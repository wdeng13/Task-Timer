export class Task {
    public name: string;
    public date: Date;
    public startTime: Date;
    public endTime: Date;
    public duration: number;

    private CLOCK_OPTIONS = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    };

    private DATE_OPTIONS = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: '2-digit',
    };

    constructor(name: string) {
        this.name = name;
        this.date = new Date();
        this.startTime = new Date();
    }

    public setEndTime() {
        this.endTime = new Date();
        this.duration = this.calDuration(this.startTime, this.endTime);
    }

    private calDuration(st: Date, et: Date) {
        return et.getTime() - st.getTime() - 1;
    }

    public getDateString() {
        return this.date.toLocaleDateString('us-EN', this.DATE_OPTIONS);
    }

    public getStartTimeString() {
        return this.startTime.toLocaleTimeString('us-EN', this.CLOCK_OPTIONS);
    }

    public getEndTimeStrintg() {
        if (this.endTime) {
            return this.endTime.toLocaleTimeString('us-EN', this.CLOCK_OPTIONS);
        } else {
            return new Date().toLocaleTimeString('us-EN', this.CLOCK_OPTIONS);
        }

    }

    public getDuration() {
        if (this.endTime) {
            this.duration = this.calDuration(this.startTime, this.endTime);
        } else {
            this.duration = this.calDuration(this.startTime, new Date());
        }
        return new Date(this.duration).toISOString().substr(11, 8);
    }
}
