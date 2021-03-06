import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Route} from './interfaces/route';
import {DataService} from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  public routes: Observable<Route[]>;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.routes = this.dataService.getMenuOptions();
  }
}
