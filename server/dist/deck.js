"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deck = void 0;
var card_1 = require("./card");
var Deck = /** @class */ (function () {
    function Deck(jokerCount) {
        var _this = this;
        this.cards = [];
        var SUITS = ["spade", "heart", "diamond", "club"];
        var _loop_1 = function (i) {
            SUITS.map(function (suit) {
                _this.cards.push(new card_1.Card(suit, i));
            });
        };
        for (var i = 1; i <= 13; i++) {
            _loop_1(i);
        }
        // 指定枚ジョーカーを含める
        if (jokerCount) {
            for (var i = 0; i < jokerCount; i++) {
                this.cards.push(new card_1.Card("joker", 0));
            }
        }
    }
    /**
     * シャッフル
     *
     */
    Deck.prototype.shuffle = function () {
        for (var i = this.cards.length - 1; i > 0; i--) {
            var r = Math.floor(Math.random() * (i + 1));
            var tmp = this.cards[i];
            this.cards[i] = this.cards[r];
            this.cards[r] = tmp;
        }
    };
    /**
     * 山札の枚数を返す
     *
     */
    Deck.prototype.length = function () {
        return this.cards.length;
    };
    /**
     * カードを選択
     *
     * @param i 選択するカードの添字
     */
    Deck.prototype.choice = function (i) {
        return this.cards[i];
    };
    /**
     * カードを山札から除いて、除いたカードを返す
     *
     * @param cards 選択したカードの配列
     */
    Deck.prototype.get = function (card) {
        var i = this.cards.indexOf(card);
        return this.cards.splice(i, 1)[0];
    };
    return Deck;
}());
exports.Deck = Deck;
