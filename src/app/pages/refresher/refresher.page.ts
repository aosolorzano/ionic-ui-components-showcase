import {Component} from '@angular/core';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage {

  public items: string[] = [];

  constructor() {
    // Nothing to implement.
  }

  private static chooseRandomName(): string {
    return names[Math.floor(Math.random() * names.length)];
  }

  private static chooseRandomLastname(): string {
    return lastNames[Math.floor(Math.random() * lastNames.length)];
  }

  public doRefresh(event: any) {
    setTimeout(() => {
      this.prependNames(10);
      event.target.complete();
    }, 1000);
  }

  private prependNames(numMessages) {
    for (let i = 0; i < numMessages; i++) {
      this.items.push(RefresherPage.chooseRandomName().concat(' ').concat(RefresherPage.chooseRandomLastname()));
    }
  }
}

const names = [
  'Burt',
  'Charlie',
  'Donald',
  'Eva',
  'Ellie',
  'Gino',
  'Isabella',
  'Karl',
  'Lionel',
  'Molly',
  'Paul',
  'Rachel',
  'Ted',
];

const lastNames = [
  'Bear',
  'Cheetah',
  'Duck',
  'Eagle',
  'Elephant',
  'Giraffe',
  'Iguana',
  'Kitten',
  'Lion',
  'Mouse',
  'Puppy',
  'Rabbit',
  'Turtle',
];
