import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Blogs from "./pages/Blogs";
import BlogDetail from "./pages/BlogDetail";
import PrivateRoute from "./components/PrivateRoute";
import CreateBlog from "./pages/admin/CreateBlog";
import BlogList from "./pages/admin/BlogList";
import AdminRoute from "./components/AdminRoute";
import Bottom from "./components/Bottom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route element={<PrivateRoute />}>
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />
        </Route>
        <Route element={<AdminRoute />}>
          <Route path="/admin/create-blog" element={<CreateBlog />} />
          <Route path="/admin/blogs" element={<BlogList />} />
        </Route>
      </Routes>
      <Bottom/>
    </BrowserRouter>
  );
};

export default App;
