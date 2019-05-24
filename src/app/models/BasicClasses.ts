import {Observable} from 'rxjs';

export class Event {
    constructor(
        id: number,
        name: string,
        sport: Observable<Sport>,
        date: string,
        description: string,
        location: Observable<Location>,
        players: Observable<Player[]>,
        opened: boolean,
        creator_id: number,
        captain_id: number
        ) {}
}

export class RawEvent {
    id: number;
    name: string;
    sport: number;
    date: string;
    description: string;
    location: number;
    players: Array<number>;
    opened: boolean;
    creator_id: number;
    captain_id: number;
}

export class Sport {
  id: number;
  name: string;
  icon: string;
  requirement: Array<String>;
}

export class Location {
  id: number;
  name: string;
  adress: string;
  postcode: string;
  sport_available: Array<number>;
}

export class Player {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  last_sign_at: string;
  group_id: Array<number>;
  picture: string;
  participate: Array<number>;
}

export class Commentaire {
  id: number;
  from: number;
  to_event: number;
  after: any;
  sent_at: string;
  content: string;
}

export class Message {
  id: number;
  from: number;
  to: number;
  sent_at: string;
  seen_at: string;
  content: string;
}

