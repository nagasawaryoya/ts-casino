import { Request, Response, NextFunction } from 'express';
import { ConcentrationGame } from '../../src/ConcentrationGame';
export module SelectHandler {
  /**
   * カード選択
   *
   * @yields {200} カードを返す
   * @yields {403} リクエスト内にユーザー情報がなかった場合
   * @yields {500} 内部エラー
   */
  export const handler = async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (req.body.params) {
        const data = req.body.params;
        const Concentration = new ConcentrationGame();
        const selectCard = Concentration.select(data.player, data.cardIndex);
        // console.log(selectCard)

        res
          .status(200)
          .json(selectCard);
      } else {
        res
          .sendStatus(403);
      }
    } catch (e) {
      res
        .sendStatus(500);
    } finally {
      next();
    }
  };
}