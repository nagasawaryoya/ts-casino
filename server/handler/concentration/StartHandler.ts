import { Request, Response, NextFunction } from 'express';
import { ConcentrationGame } from '../../src/ConcentrationGame';
export module StartHandler {
  /**
   * 神経衰弱開始
   *
   * @yields {200} カードとプレイヤーを返す
   * @yields {403} リクエスト内にユーザー情報がなかった場合
   * @yields {500} 内部エラー
   */
  export const handler = async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (req) {
        const Concentration = new ConcentrationGame();

        res
          .status(200)
          .json(Concentration.play(2));
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