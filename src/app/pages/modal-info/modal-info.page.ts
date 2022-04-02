import {Component, Input} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage {

  // Parameters sent from parent component.
  @Input() name: string;
  @Input() country: string;

  constructor(public modalController: ModalController) { }

  async closeModal() {
    await this.modalController.dismiss();
  }

  async closeModalSendingValues() {
    await this.modalController.dismiss({
      message: 'Values received OK!'
    });
  }
}
