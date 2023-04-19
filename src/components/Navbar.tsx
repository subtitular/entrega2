import React from "react";
import { Link } from "react-router-dom";

interface IProps{}
interface IState{}

let Navbar:React.FC<IProps>=()=>{
    return (
        <>
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                <div className="container">
                    <Link to={'/'} className="navbar-brand">React Router</Link>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
