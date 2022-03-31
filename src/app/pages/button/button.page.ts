import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.page.html',
  styleUrls: ['./button.page.scss'],
})
export class ButtonPage {

  public favorite: boolean = false;

  constructor() {
    // Nothing to implement
  }

  onClick() {
    this.favorite = !this.favorite;
  }
}
