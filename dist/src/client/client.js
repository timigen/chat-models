"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Client {
    constructor() {
        this.id = uuid_1.v4();
    }
}
exports.Client = Client;
