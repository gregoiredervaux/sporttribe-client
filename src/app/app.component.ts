import {Component, OnInit} from '@angular/core';
import { Event, Player } from './models/BasicClasses';
import {IndexService} from './services/index.service';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'sporttribe-server';
    Events: Event[] = [];
    user: Player;

    constructor(
        private indexService: IndexService) {
    }

    cstrEvents() {
        this.user.participate.forEach(event_id => {
                this.indexService.getEvent(event_id)
                    .subscribe(event => {
                        this.Events.push(event);
                    });
            }
        );
    }

    ngOnInit() {
        this.indexService.getPlayer(0).subscribe( user => {
            this.user = user;
            this.cstrEvents();
        });
    }
}

