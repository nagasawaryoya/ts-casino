"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
var player_1 = require("./player");
var Game = /** @class */ (function () {
    function Game() {
        this.players = [];
    }
    Game.prototype.setUp = function (users, comCount) {
        for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
            var user = users_1[_i];
            this.players.push(new player_1.Player(user));
        }
        for (var i = 0; i < comCount; i++) {
            var com = {
                name: "COM" + i,
                gender: Math.floor(Math.random() * 2),
                type: "computer",
            };
            this.players.push(new player_1.Player(com));
        }
    };
    return Game;
}());
exports.Game = Game;
