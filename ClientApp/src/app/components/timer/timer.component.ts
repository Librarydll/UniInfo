import { Component, Input, OnDestroy, OnInit, Output, EventEmitter } from "@angular/core";
import { interval, Subscription } from 'rxjs';

const time = 2;

@Component({
  selector: "timer",
  templateUrl: "timer.component.html"
})
export class TimerComponent implements OnInit, OnDestroy {

  @Output() timeIsOverEvent = new EventEmitter<boolean>();
  @Input() quizIsEnded: boolean;

  private subscription: Subscription;
  public dateNow = new Date();
  mili = 1000;
  hours = 24;
  minutes = 60;
  seconds = 60;
  constructor() {
    this.dateNow.setTime(this.dateNow.getTime() + (time * 60 * 60 * 1000)+10);
  }
  public timeDifference
  public secondsToDday: string;
  public minutesToDday: string;
  public hoursToDday: string;

  public s;
  public m;
  public h;

  private getTimeDifference() {
    this.timeDifference = this.dateNow.getTime() - new Date().getTime();
    if (this.quizIsEnded) {
      this.ngOnDestroy();
    }
    if (this.timeDifference < 0) {
      this.timeIsOverEvent.emit(null);
      this.ngOnDestroy();

    }
    this.allocaTimeUnits(this.timeDifference);
  }

  private allocaTimeUnits(timeDifference) {

    this.s = Math.floor((timeDifference) / (this.mili) % this.seconds);
    this.m = Math.floor((timeDifference) / (this.mili * this.minutes)%this.seconds);
    this.h = Math.floor((timeDifference) / (this.mili * this.minutes * this.seconds) % this.hours);
    this.hoursToDday = this.createTimeWithZeroIfNeed(this.h);
    this.minutesToDday = this.createTimeWithZeroIfNeed(this.m);
    this.secondsToDday = this.createTimeWithZeroIfNeed(this.s);
  }


  ngOnInit(): void {
    this.subscription = interval(1000)
      .subscribe(x => {
      
        this.getTimeDifference();
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


   createTimeWithZeroIfNeed(n: number):string {
    if (n < 10) {
      return "0" + n.toString();
     }
     return n.toString();
  }

}
