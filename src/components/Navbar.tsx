import React from "react";
import { Link } from "react-router-dom";
//import { logo } from "./logopoli_w.png";

interface IProps {}
interface IState {}

let Navbar: React.FC<IProps> = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <div className="container">
          <img
            src="/logopoli_w.png"
            width="91"
            height="62"
            className="d-inline-block align-top"
            alt="Logo"
          />{" "}
          <Link to={"/"} className="navbar-brand">
            Home
          </Link>
          <Link to={"/about"} className="navbar-brand">
            Nosotros
          </Link>
          <Link to={"/contacts/list"} className="navbar-brand">
            Admin
          </Link>
          <Link to={"/login"} className="navbar-brand">
            Login
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
