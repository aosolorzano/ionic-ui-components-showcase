import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  albums: any[] = [];
  searchText: string;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getAlbums().subscribe((albums: any) => {
      this.albums = albums;
    });
  }

  onChange(event: any) {
    this.searchText = event.detail.value;
  }
}
