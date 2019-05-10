export class Event {
  id: number;
  name: string;
  sport: Sport;
  date: string;
  description: string;
  location: Location;
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

export class User {
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

