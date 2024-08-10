import React, { useState } from "react";
import axios from "axios";
import { Alert, Button, Label, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleChange = (e) => {
    let id = e.target.id;
    let value = e.target.value;
    setUser({ ...user, [id]: value });
  };
  console.log(user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3000/api/auth/signup",
        user
      );
      const data = res.data;
      console.log(data);
      if (data.success === true) {
        navigate("/sign-in");
      } else {
        console.log(data.message);
        setError("Something Went Wrong");
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };
  return (
    <div className="flex flex-col md:flex-row gap-1 md:gap-12 mx-auto justify-center items-center">
      <div className="flex flex-col gap-6 my-6 md:32 mx-2">
        <h1 className="text-4xl font-bold">SignUp</h1>
        <p className="font-semi text-xl">
          SignUp To Access All Blogs and All the amazing features of this blog
          app
        </p>
        <span className="whitespace-nowrap text-2xl font-semibold dark:text-white">
          MS
          <span className="bg-gradient-to-tr from-pink-500 to-emerald-600 px-3 py-2 rounded-lg text-white hover:bg-gradient-to-l transition-all">
            Blogs.
          </span>
        </span>
      </div>
      <div className="">
        <form
          className="flex max-w-md flex-col gap-4 items-center my-6 md:my-32"
          onSubmit={handleSubmit}
        >
          {error && <Alert color="failure">{error}</Alert>}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="username" value="Username" />
            </div>
            <TextInput
              id="username"
              type="text"
              placeholder="username..."
              required
              shadow
              onChange={handleChange}
              value={user.username}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Email" />
            </div>
            <TextInput
              id="email"
              type="email"
              placeholder="name@company.com"
              required
              shadow
              onChange={handleChange}
              value={user.email}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Password" />
            </div>
            <TextInput
              id="password"
              type="password"
              placeholder="********"
              required
              shadow
              onChange={handleChange}
              value={user.password}
            />
          </div>
          <Button
            className="bg-gradient-to-tr from-pink-500 to-emerald-600 hover:bg-gradient-to-l transition-all"
            type="submit"
          >
            Register
          </Button>
          <p>
            Already Have an Account?{" "}
            <Link to="/sign-in">
              <span className="text-blue-500 underline underline-offset-4">
                Sign In
              </span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
