export interface IClient {
    id: string;
    joined: string;
    name: string;
    connection: any;
}
export declare class Client implements IClient {
    id: string;
    joined: string;
    name: string;
    connection: any;
    constructor(name: string, connection: any);
}
