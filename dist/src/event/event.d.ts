export interface IEvent {
    id: string;
    sent: string;
    received: string;
    rendered: string;
    data: any;
    type: string;
}
export declare class Event implements IEvent {
    id: string;
    sent: string;
    received: string;
    rendered: string;
    data: any;
    type: string;
    constructor(type: string, data: any);
}
