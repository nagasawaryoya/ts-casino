"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var ConcentrationGame_1 = require("./ConcentrationGame");
var app = express_1.default();
function main() {
    var concentration = new ConcentrationGame_1.ConcentrationGame(2);
    concentration.play();
    var players = concentration.game.players;
    concentration.select(players[0], 1);
    concentration.select(players[0], 2);
    setTimeout(function () {
        concentration.select(players[3], 4);
        concentration.select(players[3], 5);
    }, 6000);
}
// npx ts-node server/src/index.ts
main();
