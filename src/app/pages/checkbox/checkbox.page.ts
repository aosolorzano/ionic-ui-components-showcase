import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage {

  public data = [
    { name: 'primary',   selected: false },
    { name: 'secondary', selected: true },
    { name: 'tertiary',  selected: false },
    { name: 'success',  selected: true },
  ];
  constructor() {
    // Nothing to implement
  }

  onClick(item: any) {
    console.log(item);
  }

  viewData() {
    console.log(this.data);
  }
}
