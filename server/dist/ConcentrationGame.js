"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcentrationGame = void 0;
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var game_1 = require("./game");
var deck_1 = require("./deck");
var judgement_1 = require("./judgement");
var users = [
    {
        name: "神経太",
        gender: 0,
        type: "human",
    },
    {
        name: "衰弱子",
        gender: 1,
        type: "human",
    },
];
var ConcentrationGame = /** @class */ (function (_super) {
    __extends(ConcentrationGame, _super);
    function ConcentrationGame(joker) {
        var _this = _super.call(this) || this;
        _this.choiceCards$ = new rxjs_1.ReplaySubject(1);
        _this.totalScore = [];
        _this.cards = [];
        _this.game = new game_1.Game();
        _this.deck = new deck_1.Deck(joker);
        _this.judgement = new judgement_1.Judgement();
        return _this;
    }
    ConcentrationGame.prototype.select = function (player, cardIndex) {
        this.cards.push(this.deck.choice(cardIndex));
        if (this.cards.length % 2 === 0) {
            var choice = {
                player: player,
                card: this.cards,
            };
            this.choiceCards$.next(choice);
            this.cards.length = 0;
        }
    };
    ConcentrationGame.prototype.play = function () {
        var _this = this;
        // this.deck.shuffle();
        this.game.setUp(users, 2);
        this.choiceCards$
            .pipe(operators_1.filter(function () { return _this.deck.length() !== 0; }))
            .subscribe(function (select) {
            // 引いたカードの数字が揃っているか
            var isDuplicate = _this.judgement.duplicateNumber(select.card);
            if (!isDuplicate) {
                // 次のプレーヤーに移る
            }
            else {
                var pair_1 = [];
                select.card.map(function (card) {
                    pair_1.push(_this.deck.get(card));
                });
                // 得点
                _this.totalScore.push({
                    player: select.player.player.name,
                    cardPair: pair_1,
                });
                console.log(_this.totalScore);
            }
        });
    };
    return ConcentrationGame;
}(game_1.Game));
exports.ConcentrationGame = ConcentrationGame;
