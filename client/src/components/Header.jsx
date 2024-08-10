import React from "react";
import { Button, Navbar } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { signOut } from "../redux/user/userSlice";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignout = async () => {
    const res = await axios.get("http://localhost:3000/api/auth/signout");
    if (res.status === 200) {
      dispatch(signOut());
      navigate("/sign-in");
    }
  };

  return (
    <div className="px-8 py-2 border-b-2 shadow-md">
      <Navbar fluid rounded>
        <Navbar.Brand as={Link} href="/">
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            MS
            <span className="bg-gradient-to-tr from-pink-500 to-emerald-600 px-3 py-2 rounded-lg text-white hover:bg-gradient-to-l transition-all">
              Blogs.
            </span>
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Link
            to="/"
            className="text-xl hover:text-emerald-700 transition-all hover:underline underline-offset-4 px-2 py-1"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-xl hover:text-emerald-700 transition-all hover:underline underline-offset-4 px-2 py-1"
          >
            About
          </Link>
          <Link
            to="/blogs"
            className="text-xl hover:text-emerald-700 transition-all hover:underline underline-offset-4 px-2 py-1"
          >
            Blogs
          </Link>
          {currentUser ? (
            <>
              <Link>
                <Button
                  onClick={() => handleSignout()}
                  className="bg-gradient-to-tr from-pink-500 to-emerald-600 hover:bg-gradient-to-l transition-all text-xl text-white rounded-lg"
                >
                  Sign Out
                </Button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/sign-in">
                <Button className="bg-gradient-to-tr from-pink-500 to-emerald-600 hover:bg-gradient-to-l transition-all text-xl text-white rounded-lg">
                  Sign In
                </Button>
              </Link>
              <Link to="/sign-up">
                <Button className="bg-gradient-to-tr from-pink-500 to-emerald-600 hover:bg-gradient-to-l transition-all text-xl text-white rounded-lg">
                  Sign Up
                </Button>
              </Link>
            </>
          )}
          {currentUser?.isAdmin ? (
            <>
              <Link to="/admin/create-blog">
                <Button className="bg-gradient-to-tr from-pink-500 to-emerald-600 hover:bg-gradient-to-l transition-all text-xl text-white rounded-lg">
                  Create Blog
                </Button>
              </Link>
              <Link to="/admin/blogs">
                <Button className="bg-gradient-to-tr from-pink-500 to-emerald-600 hover:bg-gradient-to-l transition-all text-xl text-white rounded-lg">
                  Blog List
                </Button>
              </Link>
            </>
          ) : (
            <></>
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
