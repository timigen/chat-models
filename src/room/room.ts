import { Event } from "../event/event";

export interface IRoom {
  id: string;
  created: string;
  name: string;
  events: Event[];
}

export class Room implements IRoom {
  public id: string;
  public created: string;
  public name: string;
  public events: Event[];
}
