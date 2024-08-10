import Blog from "../models/blogModel.js";

export const createBlog = async (req, res) => {
  try {
    const { title, description, author } = req.body;
    if (!title || !description || !author) {
      return res.status(404).json({
        success: false,
        message: "All fields are required",
      });
    }
    const newBlog = await Blog.create({ title, description, author });
    return res.status(200).json({
      success: true,
      message: "Blog Created Successfully",
      newBlog,
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      success: false,
      message: "Something Went Wrong",
      newBlog,
    });
  }
};
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    if (!blogs) {
      return res.status(404).json({
        success: false,
        message: "Blogs Not Found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "All Blogs",
      data: blogs,
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      success: false,
      message: "Something Went Wrong",
      newBlog,
    });
  }
};
export const blogDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog Not Found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Blog Details",
      blog,
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      success: false,
      message: "Something Went Wrong",
      newBlog,
    });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBlog = await Blog.findByIdAndDelete(id);
    if (!deleteBlog) {
      return res.status(400).json({
        success: false,
        message: "Blog Not Found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Blog Deleted Successfully",
      deleteBlog,
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      success: false,
      message: "Something Went Wrong",
    });
  }
};
