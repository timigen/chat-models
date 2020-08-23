import { v4 as uuidv4 } from "uuid";

export interface IClient {
  id: string;
  joined: string;
  name: string;
  connection: any;
}

export class Client implements IClient {
  public id: string;
  public joined: string;
  public name: string;
  public connection: any;

  constructor( name: string ) {
    this.id = uuidv4();
    this.name = name;
  }
}
