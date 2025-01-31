import PopcardsDataAcess from "../dataAccess/popcards.js";
import { ok, serverError } from "../helpers/httpResponse.js";

export default class PopcardsControllers {
  constructor() {
    this.dataAccess = new PopcardsDataAcess();
  }

  async getPopcards() {
    try {
      const popcards = await this.dataAccess.getPopcards();

      return ok(popcards);
    } catch (error) {
      return serverError(error);
    }
  }

  async getPopcard(popcardId) {
    try {
      const result = await this.dataAccess.getPopcard(popcardId);

      return ok(result);
    } catch (error) {
      return serverError(error);
    }
  }

  async addPopcard(popcardData) {
    try {
      const result = await this.dataAccess.addPopcard(popcardData);

      return ok(result);
    } catch (error) {
      return serverError(error);
    }
  }

  async deletePopcard(popcardId) {
    try {
      const result = await this.dataAccess.deletePopcard(popcardId);

      return ok(result);
    } catch (error) {
      return serverError(error);
    }
  }

  async updatePopcard(popcardId, popcardData) {
    try {
      const result = await this.dataAccess.updatePopcard(
        popcardId,
        popcardData
      );

      return ok(result);
    } catch (error) {
      return serverError(error);
    }
  }
}
