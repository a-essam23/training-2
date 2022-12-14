import React from "react";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <div>
      <div className={`m-auto w-2/4 mt-6`}>
        <a href="/" alt="head" className={`${styles.header}`}>
          <ul className="text-4xl font-bold flex w-1/2 justify-between m-auto">
            <li>O</li>
            <li>L</li>
            <li>S</li>
            <li>E</li>
            <li>N</li>
          </ul>
        </a>
        <p className="tracking-tighter text-center text-gray-400">
          Blogging theme for WordPress
        </p>
      </div>
    </div>
  );
};

export default Header;
