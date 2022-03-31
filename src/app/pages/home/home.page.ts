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
    { name: 'Alert',         icon: 'american-football-outline', redirectTo: '/alert' },
    { name: 'Action Sheet',  icon: 'alert-circle-outline',      redirectTo: '/action-sheet' },
    { name: 'Avatar',        icon: 'beaker-outline',            redirectTo: '/avatar' },
    { name: 'Button',        icon: 'radio-button-off-outline',  redirectTo: '/button' },
    { name: 'Cards',         icon: 'card-outline',              redirectTo: '/card' },
    { name: 'Checkbox',      icon: 'checkmark-circle-outline',  redirectTo: '/checkbox' },
    { name: 'DateTime',      icon: 'calendar-outline',          redirectTo: '/date-time' },
    { name: 'Fab',           icon: 'car-outline',               redirectTo: '/fab' },
    { name: 'Grid',          icon: 'grid-outline',              redirectTo: '/grid' },
    { name: 'Infinite',      icon: 'infinite-outline',          redirectTo: '/infinite' },
    { name: 'Input',         icon: 'hammer-outline',            redirectTo: '/input' },
    { name: 'List',          icon: 'list-outline',              redirectTo: '/list' },
    { name: 'List Re-Order', icon: 'reorder-three-outline',     redirectTo: '/list-reorder' },
  ];

  constructor() {
    // Nothing to implement
  }

  ngOnInit() {
    // Nothing to implement
  }

}
