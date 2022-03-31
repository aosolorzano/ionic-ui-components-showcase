import {Component, OnInit, ViewChild} from '@angular/core';
import {DataService} from '../../services/data.service';
import {Observable} from 'rxjs';
import {IonList} from "@ionic/angular";

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild(IonList) ionList: IonList;
  users: Observable<any>;

  constructor(private dataService: DataService) { }

  public ngOnInit(): void {
    this.users = this.dataService.getUsers();
  }

  async favorite(user: any) {
    console.log('favorite() - START: ', user);
    await this.ionList.closeSlidingItems();
  }

  async share(user: any) {
    console.log('share() - START: ', user);
    await this.ionList.closeSlidingItems();
  }

  async delete(user: any) {
    console.log('delete() - START: ', user);
    await this.ionList.closeSlidingItems();
  }
}
