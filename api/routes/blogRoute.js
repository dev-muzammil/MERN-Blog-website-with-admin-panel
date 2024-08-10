import express from "express";
import {
  blogDetails,
  createBlog,
  deleteBlog,
  getAllBlogs,
} from "../controllers/blogController.js";
const router = express.Router();

router.route("/create-blog").post(createBlog);
router.route("/get-blogs").get(getAllBlogs);
router.route("/blog-details/:id").get(blogDetails);
router.route("/delete-blog/:id").delete(deleteBlog);

export default router;
