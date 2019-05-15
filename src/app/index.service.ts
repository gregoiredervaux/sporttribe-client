import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from 'config.service';
import {Observable} from 'rxjs';
import {Sport, Location, Event, RawEvent} from './BasicClasses';
import Any = jasmine.Any;
import {Player} from '@angular/core/src/render3/interfaces/player';
import {toNumbers} from '@angular/compiler-cli/src/diagnostics/typescript_version';

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
        return this.http.get(this.config.apiUrl + `/sports/${id}`);
    }

    getSports(ids: number[]): Observable<Sport[]> {
        if (!ids) {
            return this.http.get<Sport[]>(this.config.apiUrl + '/sports');
        } else if (ids.length !== 0) {
            const ls_sports: Observable<Sport>[];
            ids.forEach(id => {
                console.log('id: ' + id);
                ls_sports.push(this.getSport(id));
            });
            const ls_sports_obs = new Observable<Sport[]>(() => {
                ls_sports.forEach(sport => sport.subscribe());
            });
            return ls_sports_obs;
        }
    }

    getPlayer(id: number): Observable<Player> {
        return this.http.get<Player>(this.config.apiUrl + `/profiles/${id}`);
    }

    getPlayers(ids: number[]): Observable<Player[]> {
        if (!ids) {
            return this.http.get<Player[]>(this.config.apiUrl + '/profiles');
        } else if (ids.length !== 0) {
            const ls_player: Observable<Player>[];
            ids.forEach(id => {
                console.log('id: ' + id);
                ls_player.push(this.getPlayer(id));
            });
            const ls_player_obs = new Observable<Player[]>(() => {
                ls_player.forEach(player => player.subscribe());
            });
            return ls_player_obs;
        }
    }

    getLocation(id: number): Observable<Location> {
        return this.http.get<Location>(this.config.apiUrl + `/locations/${id}`);
    }

    getLocations(ids: number[]): Observable<Location[]> {
        if (!ids) {
            return this.http.get<Location[]>(this.config.apiUrl + '/locations');
        } else if (ids.length !== 0) {
            const ls_location: Observable<Location>[];
            ids.forEach(id => {
                console.log('id: ' + id);
                ls_location.push(this.getLocation(id));
            });
            const ls_location_obs = new Observable<Location[]>(() => {
                ls_location.forEach(location => location.subscribe());
            });
            return ls_location_obs;
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

    getEvent(id: number): Observable<Event[]> {
        return this.getRawEvent(id).map(res => {
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
                res.captain_id)
        });
    }

    getItemById(typeUrl, ids: number[]): Observable<Object[]> {
        if (!ids) {
            return this.http.get<Object[]>(this.config.apiUrl + `/${typeUrl}`);
        } else if (ids.length !== 0) {
            const ls_Object: Observable<Object>[];
            ids.forEach(id => {
                console.log('id: ' + id);
                ls_Object.push(this.http.get<Object[]>(this.config.apiUrl + `/${typeUrl}/${id}`));
            });
            const ls_Object_obs = new Observable<Sport[]>(() => {
                ls_Object.forEach(obj => obj.subscribe());
            });
            return ls_Object_obs;
        }
    }
}
