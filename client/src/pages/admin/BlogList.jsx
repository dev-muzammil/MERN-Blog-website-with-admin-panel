import React, { useEffect, useState } from "react";
import axios from "axios";
import { Alert, Table } from "flowbite-react";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [alert, setAlert] = useState(null);
  const getBlogs = async () => {
    const res = await axios.get("http://localhost:3000/api/data/get-blogs");
    const data = res.data.data;
    setBlogs(data);
  };

  useEffect(() => {
    getBlogs();
  }, []);

  const handleDelete = async (id) => {
    const res = await axios.delete(
      `http://localhost:3000/api/data/delete-blog/${id}`
    );
    console.log(res);
    setAlert(res.data.message);
  };
  return (
    <div>
      {alert && <Alert className="max-w-[35%] mx-auto mt-4">{alert}</Alert>}
      <div className="flex flex-wrap gap-8 items-center justify-center p-4">
        {blogs.map((item, index) => {
          return (
            <div className="overflow-x-scroll" key={index}>
              <Table>
                <Table.Head>
                  <Table.HeadCell>TItle</Table.HeadCell>
                  <Table.HeadCell>Author</Table.HeadCell>
                  <Table.HeadCell>Description</Table.HeadCell>
                  <Table.HeadCell>
                    <span className="sr-only">Edit</span>
                  </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white line-clamp-1">
                      {item.title}
                    </Table.Cell>
                    <Table.Cell>{item.author}</Table.Cell>
                    <Table.Cell className="line-clamp-2">
                      {item.description}
                    </Table.Cell>
                    <Table.Cell>
                      <button
                        onClick={() => handleDelete(item._id)}
                        href="#"
                        className="font-medium text-red-600 hover:underline dark:text-red-500"
                      >
                        Delete
                      </button>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogList;
