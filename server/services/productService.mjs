import { productRepository } from "../repositories/productRepository.mjs";

export const productService = {
  getAllProducts: async (keywords, category) => {
    const query = {};
    if (keywords) query.name = new RegExp(keywords, "i");
    if (category) query.category = new RegExp(category, "i");
    return productRepository.findAll(query);
  },

  getProductById: (id) => productRepository.findById(id),

  createProduct: (productData) => {
    const data = { ...productData, created_at: new Date() };
    return productRepository.create(data);
  },

  updateProduct: (id, productData) => {
    const data = { ...productData, modified_at: new Date() };
    return productRepository.update(id, data);
  },
  deleteProduct: (id) => productRepository.delete(id),
};
