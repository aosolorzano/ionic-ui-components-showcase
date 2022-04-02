import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  superHeroes: Observable<any>;
  segmentValue = 'all';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    setTimeout(() => {
      this.superHeroes = this.dataService.getHeroes();
    }, 2000);
  }

  segmentChanged(event: any) {
    console.log('segmentChanged() - START: ', event.detail.value);
    this.segmentValue = event.detail.value;
  }
}
