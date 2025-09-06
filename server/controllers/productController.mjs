import { productService } from "../services/productService.mjs";

const pickProductInput = (body) => {
  const { name, price, image, description, category } = body;
  return { name, price, image, description, category };
};

export const productController = {
  getAllProducts: async (req, res) => {
    try {
      const data = await productService.getAllProducts(
        req.query.keywords,
        req.query.category
      );
      return res.json({ data });
    } catch (err) {
      console.error("getAllProducts error:", err);
      return res.status(500).json({ message: err.message });
    }
  },

  getProductById: async (req, res) => {
    try {
      const data = await productService.getProductById(req.params.id);
      return res.json({ data });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },

  createProduct: async (req, res) => {
    try {
      const input = pickProductInput(req.body);
      const result = await productService.createProduct(input);

      return res.json({
        message: `Product Id ${result.insertedId} has been created successfully`,
      });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },

  updateProduct: async (req, res) => {
    try {
      const input = pickProductInput(req.body);
      await productService.updateProduct(req.params.id, input);
      return res.json({
        message: `Product record ${req.params.id} has been updated successfully`,
      });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },

  deleteProduct: async (req, res) => {
    try {
      await productService.deleteProduct(req.params.id);
      return res.json({
        message: `Product record ${req.params.id} has been deleted successfully`,
      });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
};
