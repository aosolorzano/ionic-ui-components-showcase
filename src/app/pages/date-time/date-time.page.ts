import {Component, ViewChild} from '@angular/core';
import {IonDatetime} from '@ionic/angular';
// The ionChange event will emit the date value as an ISO-8601 string in the
// event payload. It is the developer's responsibility to format it based on
// their application needs. We recommend using "date-fns" to format the date value.
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage {
  // ISO 8601 Datetime Format "YYYY-MM-DDTHH:mmZ"
  // Ionic Framework uses the ISO 8601 datetime format for its value. The value is simply a string,
  // rather than using JavaScript's Date object. Using the ISO datetime format makes it easy to
  // serialize and parse within JSON objects and databases.
  @ViewChild(IonDatetime, { static: true }) datetime: IonDatetime;
  public dateValue = '';
  public dateValue2 = '';
  public dateValue3 = '';
  public dateValue4 = '';
  public dateValue5 = '';

  constructor() {
    // Nothing to implement
  }

  confirm() {
    console.log('confirm() - START: ', this.dateValue4);
    this.datetime.confirm().then(r => {
      console.log('After datetime confirm: ', r);
    });
  }

  async reset() {
    console.log('reset() - START: ', this.dateValue4);
    await this.datetime.reset();
    console.log('After datetime reset: ', this.dateValue4);
  }

  async confirmModal() {
    console.log('confirmModal() - START');
    console.log(this.dateValue5);
  }

  async resetModal() {
    console.log('resetModal() - START');
    this.dateValue5 = '';
  }

  formatDate(value: string) {
    console.log('formatDate() - START: ', value);
    return format(parseISO(value), 'dd MMM yyyy HH:mm:ss');
  }
}
