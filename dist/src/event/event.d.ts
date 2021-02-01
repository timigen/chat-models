export interface IEvent {
    id: string;
    created: string;
    rendered: string;
    data: any;
    type: string;
    color: string;
}
export declare class Event implements IEvent {
    id: string;
    created: string;
    rendered: string;
    data: any;
    type: string;
    color: string;
    constructor(type: string, data: any);
}
