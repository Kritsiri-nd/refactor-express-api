import { db } from "../utils/db.js";
import { ObjectId } from "mongodb";

const collection = db.collection("practice-mongo");

export const productRepository = {
  findAll: (query) => collection.find(query).limit(10).toArray(),
  findById: (id) => {
    const _id = new ObjectId(id);
    return collection.findOne({ _id });
  },

  create: (productData) => collection.insertOne(productData),

  update: (id, productData) => {
    const _id = new ObjectId(id);
    return collection.updateOne({ _id }, { $set: productData });
  },

  delete: (id) => {
    const _id = new ObjectId(id);
    return collection.deleteOne({ _id });
  },
};
