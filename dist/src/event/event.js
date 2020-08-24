"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Event {
    constructor(type, data) {
        this.id = uuid_1.v4();
        this.created = new Date().toISOString();
        this.rendered = null;
        this.type = type;
        this.data = data;
    }
}
exports.Event = Event;
