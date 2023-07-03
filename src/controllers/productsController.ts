import { products } from "../data/products";
import { Product } from "../interface/product";

export const productsController = {
  getProducts: (req: any, res: any) => {
    try {
      const result: Product[] = products.map(
        ({ id, price, name, stock, image, description }) => ({
          id,
          price,
          name,
          stock,
          image,
          description
        })
      );
      res.json(result);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error getting the products " });
    }
  },
  getProductByid: (req: any, res: any) => {
    try {
      if (!req.params.id || !parseInt(req.params.id))
        return res.status(400).json("invalid id");

      const result = products.find(
        (product) => product.id === parseInt(req.params.id)
      );

      if (result) res.json(result);
      else res.status(404).json({ message: "Product not found" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error getting a product" });
    }
  },
};
