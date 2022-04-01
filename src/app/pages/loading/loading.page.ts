import {Component, OnInit} from '@angular/core';
import {LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage {

  public loading: HTMLIonLoadingElement;

  constructor(public loadingController: LoadingController) { }

  async showLoading() {
    await this.presentLoading('Loading...');
    setTimeout(() => {
      this.loading.dismiss();
    }, 2000);
  }
  async presentLoading(message: string) {
    this.loading = await this.loadingController.create({
      message
    });
    await this.loading.present();
  }
}
