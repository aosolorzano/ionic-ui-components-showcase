import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage {
  public name = 'Andres';
  public user = {
    email: '',
    password: ''
  };
  public email: string;
  constructor() {
    // Nothing to implement
  }

  onSubmit(form: NgForm) {
    console.log('submit() - START: ', this.user);
    console.log(form);
  }
}
