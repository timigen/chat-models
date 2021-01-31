"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Client {
    constructor(id, connection, color) {
        this.id = id;
        this.connection = connection;
        this.joined = new Date().toISOString();
        this.color = color;
    }
}
exports.Client = Client;
