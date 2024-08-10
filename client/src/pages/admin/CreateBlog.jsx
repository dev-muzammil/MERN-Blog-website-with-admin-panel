import axios from "axios";
import { Alert, Button, Label, Textarea, TextInput } from "flowbite-react";
import React, { useState } from "react";

const CreateBlog = () => {
  const [form, setForm] = useState({
    title: "",
    author: "",
    description: "",
  });
  const [alert, setAlert] = useState(null);
  const handleChange = (e) => {
    let id = e.target.id;
    let value = e.target.value;
    setForm({ ...form, [id]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3000/api/data/create-blog",
        form
      );
      const message = res.data.message
      console.log(message)
      setAlert(message)
    } catch (error) {
      setAlert(error)
    }
  };
  console.log(form);
  return (
    <div className="">
      <h1 className="text-center text-4xl mt-4 font-extrabold">Create Blog</h1>
      <form
        className="flex flex-col gap-4 max-w-[50%] justify-center mx-auto"
        onSubmit={handleSubmit}
      >
        {alert && <Alert className="mt-4">{alert}</Alert>}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="title" value="Title" />
          </div>
          <TextInput
            id="title"
            type="text"
            placeholder="Title"
            required
            value={form.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="author" value="Author" />
          </div>
          <TextInput
            id="author"
            type="text"
            required
            value={form.author}
            onChange={handleChange}
            placeholder="Author Name"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="description" value="Description" />
          </div>
          <Textarea
            id="description"
            type="text"
            required
            className="h-60 overflow-y-scroll"
            value={form.description}
            onChange={handleChange}
            placeholder="Blog Description..."
          />
        </div>
        <Button
          className="bg-gradient-to-tr from-pink-500 to-emerald-600 hover:bg-gradient-to-l transition-all text-xl text-white rounded-lg"
          type="submit"
        >
          Create Blog
        </Button>
      </form>
    </div>
  );
};

export default CreateBlog;
