import {Component, OnInit} from '@angular/core';
import { Event } from './BasicClasses';
import {IndexService} from './index.service';
import {Observable} from 'rxjs';
import Any = jasmine.Any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sporttribe-server';
  Events: Event[] = [];

  constructor(
    private indexService: IndexService) {}

  cstrEvents(): Observable<Event[]> {
    event: Observable<Any> = this.indexService.getEvents();

    return new Promise(resolve => {
      this.indexService.getPlayers(event.players)
        .then(players => {
          event.players = players;
          return this.indexService.getSports(event.sport_id);
        })
        .then(sport => {
          event.sport = sport[0];
          return this.indexService.getLocations(event.location_id);
        })
        .then(location => {
          event.location = location[0];
          resolve(event);
        });
    });
  }

  getEvents(): void {
    this.Events = this.indexService.getEvents();
  }
}
