import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="wrapperHead">
      <h3 className="wrapTitle">
        <a href="#">Game of Thrones DB</a>
      </h3>
      <ul className="wrapSpic">
        <li className="elemLI">
          <a href="#">Characters</a>
        </li>
        <li className="elemLI">
          <a href="#">Houses</a>
        </li>
        <li className="elemLI">
          <a href="#">Books</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
