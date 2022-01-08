import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-primary px-4">
      <Link className="navbar-brand" to="/">
        Surgery Central
      </Link>
    </nav>
  );
};

export default Header;
