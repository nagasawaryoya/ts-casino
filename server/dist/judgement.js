"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Judgement = void 0;
/**
 * 判定クラス
 *
 */
var Judgement = /** @class */ (function () {
    function Judgement() {
    }
    /**
     * 渡されたカードの数字が同じか判定する
     *
     */
    Judgement.prototype.duplicateNumber = function (cards) {
        var set = new Set();
        cards.map(function (card) {
            set.add(card.rank);
        });
        return (set.size === 1) ? true : false;
    };
    return Judgement;
}());
exports.Judgement = Judgement;
