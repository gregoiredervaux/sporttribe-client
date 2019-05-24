import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';
import {Observable, combineLatest} from 'rxjs';
import { map } from 'rxjs/operators';
import {Sport, Location, Event, RawEvent, Player} from '../models/BasicClasses';

@Injectable({
    providedIn: 'root'
})
export class IndexService {

    constructor(
        private http: HttpClient,
        private config: ConfigService) {
    }

    getRawEvents(date = null): Observable<RawEvent[]> {
        if (!date) {
            return this.http.get<RawEvent[]>(this.config.apiUrl + '/events');
        } else {
            return this.http.get<RawEvent[]>(this.config.apiUrl + `/events?date=${date}`);
        }
    }

    getRawEvent(id: number): Observable<RawEvent> {
        return this.http.get<RawEvent>(this.config.apiUrl + `/events/${id}`);
    }

    getSport(id: number): Observable<Sport> {
        return this.http.get<Sport>(this.config.apiUrl + `/sports/${id}`);
    }

    getSports(ids: number[]): Observable<Sport[]> {
        if (!ids) {
            return this.http.get<Sport[]>(this.config.apiUrl + '/sports');
        } else if (ids.length !== 0) {
            const ls_sports = [];
            ids.forEach(id => {
                console.log('id: ' + id);
                ls_sports.push(this.getSport(id));
            });
            return combineLatest(ls_sports);
        }
    }

    getPlayer(id: number): Observable<Player> {
        return this.http.get<Player>(this.config.apiUrl + `/profiles/${id}`);
    }

    getPlayers(ids: number[]): Observable<Player[]> {
        if (!ids) {
            return this.http.get<Player[]>(this.config.apiUrl + '/profiles');
        } else if (ids.length !== 0) {
            const ls_player  = [];
            ids.forEach(id => {
                console.log('id: ' + id);
                ls_player.push(this.getPlayer(id));
            });
            return combineLatest(ls_player);
        }
    }

    getLocation(id: number): Observable<Location> {
        return this.http.get<Location>(this.config.apiUrl + `/locations/${id}`);
    }

    getLocations(ids: number[]): Observable<Location[]> {
        if (!ids) {
            return this.http.get<Location[]>(this.config.apiUrl + '/locations');
        } else if (ids.length !== 0) {
            const ls_location = [];
            ids.forEach(id => {
                console.log('id: ' + id);
                ls_location.push(this.getLocation(id));
            });
            return combineLatest(ls_location);
        }
    }

    getEvent(id: number): Observable<Event> {
        console.log(this.config.apiUrl);
        return this.getRawEvent(id).pipe(map(res => {
            return new Event(
                res.id,
                res.name,
                this.getSport(res.sport),
                res.date,
                res.description,
                this.getLocation(res.location),
                this.getPlayers(res.players),
                res.opened,
                res.creator_id,
                res.captain_id);
        }));
    }
}
