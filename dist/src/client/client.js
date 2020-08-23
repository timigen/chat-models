"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Client {
    constructor(name, connection) {
        this.id = uuid_1.v4();
        this.name = name;
        this.connection = connection;
        this.joined = new Date().toISOString();
    }
}
exports.Client = Client;
