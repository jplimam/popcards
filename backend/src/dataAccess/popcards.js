import { Mongo } from "../database/mongo.js";
import { ObjectId } from "mongodb";

const collectionName = "popcards";

export default class PopcardsDataAcess {
  async getPopcards() {
    const result = await Mongo.db.collection(collectionName).find({}).toArray();

    return result;
  }

  async getPopcard(popcardId) {
    const result = await Mongo.db
      .collection(collectionName)
      .findOne({ _id: new ObjectId(popcardId) });

    return result;
  }

  async addPopcard(popcardData) {
    const result = await Mongo.db
      .collection(collectionName)
      .insertOne(popcardData);

    return result;
  }

  async deletePopcard(popcardId) {
    const result = await Mongo.db
      .collection(collectionName)
      .findOneAndDelete({ _id: new ObjectId(popcardId) });

    return result;
  }

  async updatePopcard(popcardId, popcardData) {
    const result = await Mongo.db
      .collection(collectionName)
      .findOneAndUpdate(
        { _id: new ObjectId(popcardId) },
        { $set: popcardData }
      );

    return result;
  }
}
