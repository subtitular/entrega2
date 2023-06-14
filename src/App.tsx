import React from "react";
import "./App.css";
import { Routes, Route, Navigate, Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";
import About from "./components/About";
import LoginComponent from "./components/LoginComponent";
import ChangePasswordComponent from "./components/ChangePasswordComponent";
import EditBlogEntryComponent from "./components/EditBlogEntryComponent";
import HomeComponent from "./components/HomeComponent";
import Register from "./components/RegisterComponent";
import ProfileComponent from "./components/ProfileComponent";
import ForgotPassword from "./components/ForgotPasswordComponent";
// <Route path={'/change'} element={<ChangePasswordComponent/>}/>

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Navigate to={"/home"} />} />
        <Route path={"/home"} element={<HomeComponent />} />
        <Route
          path={"/change-password"}
          element={<ChangePasswordComponent />}
        />
        <Route path={"/restaurar-contrasena"} element={<ForgotPassword />} />

        <Route path={"/contacts/list"} element={<UserList />} />
        <Route path={"/registrarse"} element={<Register />} />
        <Route path={"/perfil"} element={<ProfileComponent />} />
        <Route path={"/contacts/:id"} element={<UserDetails />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/login"} element={<LoginComponent />} />
        <Route path={"/entry"} element={<EditBlogEntryComponent id={2} />} />
      </Routes>
    </>
  );
}

export default App;
