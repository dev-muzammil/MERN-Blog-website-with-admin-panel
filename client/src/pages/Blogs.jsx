import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogCard from "../components/BlogCard";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const getBlogs = async () => {
    const res = await axios.get("https://mern-blog-website-with-admin-panel-api.vercel.app
/api/data/get-blogs");
    const data = res.data.data;
    setBlogs(data);
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div className="flex flex-wrap gap-8 items-center justify-center p-4">
      {blogs.map((item, index) => {
        return (
          <BlogCard
            key={index}
            title={item.title}
            description={item.description}
            id={item._id}
          />
        );
      })}
    </div>
  );
};

export default Blogs;
