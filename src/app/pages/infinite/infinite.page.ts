import {Component} from '@angular/core';

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
})
export class InfinitePage {

  data: any = new Array(20);
  constructor() {
    // Nothing to implement.
  }

  loadData(event: any) {
    console.log(event);
    setTimeout(() => {
      const newArray = new Array(20);
      this.data.push(...newArray);
      console.log('Done adding more items!');
      event.target.complete();
      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.data.length === 60) {
        event.target.disabled = true;
      }
    }, 1000);
  }
}
