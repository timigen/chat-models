import { Event } from "../event/event";
export interface IRoom {
    id: string;
    created: string;
    name: string;
    events: Event[];
}
export declare class Room implements IRoom {
    id: string;
    created: string;
    name: string;
    events: Event[];
}
