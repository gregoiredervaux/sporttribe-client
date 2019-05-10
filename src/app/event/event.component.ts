import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../BasicClasses';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  @Input() event: Event;

  constructor(){}

  ngOnInit() {
  }
}
