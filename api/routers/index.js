import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct,
} from "../controllers/ProductController.js";

const router = Router();
const productRouter = Router();

// ------------------------------ Project Router ------------------------------
productRouter.get("/", getAllProducts);
productRouter.get("/id/:id", getProductById);
productRouter.post("/add", createProduct);
productRouter.post("/update/:id", updateProduct);
productRouter.post("/delete/:id", deleteProduct);

// ------------------------------ Main Router
router.get("/", (req, res) => {
  res.send("Welcome to ESI FOODS PRODUCTS API");
});

router.use("/products", productRouter);

export default router;
