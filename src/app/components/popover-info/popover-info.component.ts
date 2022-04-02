import {Component} from '@angular/core';
import {PopoverController} from '@ionic/angular';

@Component({
  selector: 'app-popover-info',
  templateUrl: './popover-info.component.html',
  styleUrls: ['./popover-info.component.scss'],
})
export class PopoverInfoComponent {

  public options = new Array(10);
  constructor(private popoverController: PopoverController ) { }

  public async onSelectOption(index: number) {
    console.log('Index selected: ', index);
    await this.popoverController.dismiss({
      indexSelected: index
    });
  }

  public async close() {
    console.log('Close Popover');
    await this.popoverController.dismiss(null);
  }
}
