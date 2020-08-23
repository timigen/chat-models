import { v4 as uuidv4 } from "uuid";
import { IEvent } from "../event/event";

export interface IRoom {
  id: string;
  created: string;
  name: string;
  events: IEvent[];
}

export class Room implements IRoom {
  public id: string;
  public created: string;
  public name: string;
  public events: IEvent[];

  constructor(name: string) {
    this.id = uuidv4();
    this.name = name;
    this.created = new Date().toISOString();
  }
}
