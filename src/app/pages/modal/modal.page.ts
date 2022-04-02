import {Component} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {ModalInfoPage} from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage {

  constructor(private modalController: ModalController) {}

  public async presentModal() {
    const modal = await this.modalController.create({
      component: ModalInfoPage,   // NOTE: we are using 'ModalInfoPage' instead.
      cssClass: 'my-custom-class'
    });
    return modal.present();
  }

  public async presentModalSendingValues() {
    const modal = await this.modalController.create({
      component: ModalInfoPage,   // NOTE: we are using 'ModalInfoPage' instead.
      componentProps: {
        name: 'Andres',
        country: 'Ecuador'
      }
    });
    await modal.present();
    const { data }  = await modal.onDidDismiss();   // IMPORTANT: Use "await" to receive values.
    console.log('Values received from closed modal: ', data);
  }
}
