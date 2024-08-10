import React from "react";
import { Button, Card } from "flowbite-react";
import { Link } from "react-router-dom";

const BlogCard = ({ id, title, description }) => {
  return (
    <div>
      <Card className="max-w-sm">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2">
          {title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400 line-clamp-2">
          {description}
        </p>
        <Link to={`/blogs/${id}`}>
          <Button className="bg-gradient-to-tr from-pink-500 to-emerald-600 hover:bg-gradient-to-l transition-all">
            Read more
          </Button>
        </Link>
      </Card>
    </div>
  );
};

export default BlogCard;
