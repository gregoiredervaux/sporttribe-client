import {Component, OnInit} from '@angular/core';
import { Event, Player } from '@/models/BasicClasses';
import {IndexService} from '@/services/index.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {

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
