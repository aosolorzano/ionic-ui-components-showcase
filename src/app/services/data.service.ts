import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Route} from '../interfaces/route';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  public getUsers() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
  }

  public getAlbums() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/albums');
  }

  public getMenuOptions() {
    return this.httpClient.get<Route[]>('/assets/data/menu-options.json');
  }

  public getHeroes() {
    return this.httpClient.get<Route[]>('/assets/data/superheroes.json');
  }
}
