import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BlogDetail = () => {
  const [blogDetail, setBlogDetail] = useState({});
  const { id } = useParams();
  const getBlogDetails = async () => {
    const res = await axios.get(
      `https://mern-blog-website-with-admin-panel-api.vercel.app
/api/data/blog-details/${id}`
    );
    const data = res.data.blog;
    setBlogDetail(data);
    console.log(data);
  };
  useEffect(() => {
    getBlogDetails();
  }, []);

  return (
    <>
      <div className="flex justify-center flex-col">
        <h1 className="text-3xl md:text-5xl font-bold text-center mt-4 mx-2">
          {blogDetail.title}
        </h1>
        <span className="text-center font-medium mt-2">
          <span className="font-bold text-emerald-800">Author:</span>{" "}
          {blogDetail.author}
        </span>
      </div>
      <p className="mx-8 mt-2 text-xl md:mx-20">{blogDetail.description}</p>
    </>
  );
};

export default BlogDetail;
