import { v4 as uuidv4 } from "uuid";

export interface IClient {
  id: string;
  joined: string;
  name: string;
  connection: any;
  color: string;
}

export class Client implements IClient {
  public id: uuidv4;
  public joined: string;
  public name: string;
  public connection: any;
  public color: string;

  constructor(id: uuidv4, connection: any, color: string) {
    this.id = id;
    this.connection = connection;
    this.joined = new Date().toISOString();
    this.color = color;
  }
}
