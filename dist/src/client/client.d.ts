import { v4 as uuidv4 } from "uuid";
export interface IClient {
    id: string;
    joined: string;
    name: string;
    connection: any;
}
export declare class Client implements IClient {
    id: uuidv4;
    joined: string;
    name: string;
    connection: any;
    constructor(id: uuidv4, connection: any);
}
