import {Component} from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage {

  characters: string[] = ['Aquaman', 'Superman', 'Batman', 'Wonder Women', 'Flash'];
  disableReorder = false;
  constructor() {
    // Nothing to implement
  }

  doReOrder(event: any) {
    console.log(event);
    const movedItem = this.characters.splice(event.detail.from, 1)[0];
    this.characters.splice(event.detail.to, 0, movedItem);
    event.detail.complete();
    console.log('New ordered list: ', this.characters);
  }
}
