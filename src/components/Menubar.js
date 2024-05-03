import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Menubar.css";
const Menubar = (props) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    props.setIsLoggedIn(false);
    navigate("/login");
  };
  return (
    <div>
      {props.isLoggedIn && (
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/parent">parent</Link>
          </li>
          <li>
            <Link to="/employee">EMP</Link>
          </li>
          <li>
            <Link to="/add">Add</Link>
          </li>
          <li onClick={handleLogout}>Logout</li>
        </ul>
      )}
      {!props.isLoggedIn && (
        <li>
          <Link to="/login">login</Link>
        </li>
      )}
    </div>
  );
};

export default Menubar;
