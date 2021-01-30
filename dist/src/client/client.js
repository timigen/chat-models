"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Client {
    constructor(id, connection) {
        this.id = id;
        this.connection = connection;
        this.joined = new Date().toISOString();
    }
}
exports.Client = Client;
