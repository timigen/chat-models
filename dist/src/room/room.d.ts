import { IEvent } from "../event/event";
export interface IRoom {
    id: string;
    created: string;
    name: string;
    events: IEvent[];
}
export declare class Room implements IRoom {
    id: string;
    created: string;
    name: string;
    events: IEvent[];
    constructor(name: string);
}
