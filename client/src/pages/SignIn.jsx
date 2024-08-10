import React, { useState } from "react";
import axios from "axios";
import { Alert, Button, Label, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  signInFailure,
  signInStart,
  signInSuccess,
} from "../redux/user/userSlice";

const SignIn = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    let id = e.target.id;
    let value = e.target.value;
    setUser({ ...user, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await axios.post(
        "http://localhost:3000/api/auth/signin",
        user
      );
      const data = res.data;
      console.log(data);
      if (data.success === true) {
        dispatch(signInSuccess(data.rest));
        navigate("/");
      } else {
        dispatch(signInFailure("Something Went Wrong"));
      }
    } catch (error) {
      console.log(error);
      dispatch(signInFailure(error.message));
    }
  };
  return (
    <div className="flex flex-col md:flex-row gap-1 md:gap-12 mx-auto justify-center items-center">
      <div className="flex flex-col gap-6 my-6 md:32 mx-2">
        <h1 className="text-4xl font-bold">SignIn</h1>
        <p className="font-semi text-xl">
          SignIn To Access All Blogs and All the amazing features of this blog
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
            Login
          </Button>
          <p>
            Dont Have an Account?{" "}
            <Link to="/sign-up">
              <span className="text-blue-500 underline underline-offset-4">
                Sign Up
              </span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
