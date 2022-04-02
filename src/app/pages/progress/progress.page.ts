import {Component} from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage {
  public percentage = 0.0;

  constructor() { }

  rangeChange(event: any) {
    console.log('Range change: ', event.detail.value);
    this.percentage = event.detail.value / 100;
  }
}
