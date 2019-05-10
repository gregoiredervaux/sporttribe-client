import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from 'config.service';
import {Observable} from 'rxjs';
import {Sport, Location} from './BasicClasses';

@Injectable({
  providedIn: 'root'
})
export class IndexService {

  constructor(
    private http: HttpClient,
    private config: ConfigService) {}


  getEvents (date = null) {
    if (!date) {
      return this.http.get(this.config.apiUrl + '/events');
    } else {
      return this.http.get(this.config.apiUrl + `/events?date=${date}`);
    }
  }

  getSports(ids = null) {
    if (!ids) {
      return this.http.get(this.config.apiUrl + '/sports');
    } else if (ids.length !== 0) {
      const ls_sports: Array<Observable<Sport>> = [];
      ids.forEach(id => {
        console.log('id: ' + id);
        ls_sports.push(this.http.get(this.config.apiUrl + `/sports/${id}`));
      });
      return ls_sports;
    }
  }

  getPlayers(ids = null) {
    if (!ids) {
      return this.http.get(this.config.apiUrl + '/profiles');
    } else if (ids.length !== 0) {
      const ls_players: Array<Observable<number>> = [];
      ids.forEach(id => {
        ls_players.push(this.http.get(this.config.apiUrl + `/profiles/${id}`));
      });
      return ls_players;
    }
  }

  getLocations(ids = null) {

    if (!ids) {
      return this.http.get(this.config.apiUrl + '/locations');
    } else if (ids.length >= 1) {
      const ls_locations: Array<Observable<Location>> = [];
      ids.forEach(id => {
        ls_locations.push(this.http.get(this.config.apiUrl + `/locations/${id}`));
      });
      return ls_locations;
    }
  }
}
