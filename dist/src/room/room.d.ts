import { Message } from "../message/message";
export interface Room {
    id: string;
    created: string;
    name: string;
    history: Message[];
}
