"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Room {
    constructor(name) {
        this.id = uuid_1.v4();
        this.name = name;
        this.created = new Date().toISOString();
    }
}
exports.Room = Room;
