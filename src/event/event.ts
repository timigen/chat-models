import { v4 as uuidv4 } from "uuid";

export interface IEvent {
  id: string;
  sent: string;
  received: string;
  rendered: string;
  data: any;
  type: string;
}

export class Event implements IEvent {
  public id: string;
  public sent: string;
  public received: string;
  public rendered: string;
  public data: any;
  public type: string;

  constructor(type: string, data: any) {
    this.id = uuidv4();
    this.sent = null;
    this.received = null;
    this.rendered = null;
    this.type = type;
    this.data = data;
  }
}
