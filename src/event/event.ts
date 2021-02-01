import { v4 as uuidv4 } from "uuid";

export interface IEvent {
  id: string;
  created: string;
  rendered: string;
  data: any;
  type: string;
  color: string;
}

export class Event implements IEvent {
  public id: string;
  public created: string;
  public rendered: string;
  public data: any;
  public type: string;
  public color: string;

  constructor(type: string, data: any) {
    this.id = uuidv4();
    this.created = new Date().toISOString();
    this.rendered = null;
    this.type = type;
    this.data = data;
  }
}
