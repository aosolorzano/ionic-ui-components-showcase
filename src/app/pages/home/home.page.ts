import { Component, OnInit } from '@angular/core';

interface Routes {
  name: string;
  icon: string;
  redirectTo: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public routes: Routes[] = [
    { name: 'Action Sheet', icon: 'american-football-outline', redirectTo: '/alert' },
    { name: 'Alert',        icon: 'american-football-outline', redirectTo: '/action-sheet' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
