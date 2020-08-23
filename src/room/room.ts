import { Event } from "../event/event";

export interface Room {
  id: string;
  created: string;
  name: string;
  events: Event[];
}
