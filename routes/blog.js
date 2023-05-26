import express from "express";
import {
  createBlog,
  updateBlog,
  deleteBlog,
  getSingleBlog,
  getAllBlogs,
} from "../controllers/blogController.js";
const router = express.Router();

import { verifyVehicleDriver } from "../utils/verifyToken.js";
router.get("/single/:id", getSingleBlog);

router.post("/", createBlog);

router.delete("/:id", deleteBlog);

router.put("/update/:id", updateBlog);

router.get("/", getAllBlogs);



export default router;
