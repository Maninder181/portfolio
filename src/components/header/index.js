import React from "react";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header_wrap}>
          <div className={styles.logo}>
            <img src="/assets/images/logo.png" alt="" width={150} />
          </div>
          <div className={styles.nav_wrap}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/about">About me</Link>
              </li>
              
            </ul>
          </div>
          <div className={styles.header_contact}>
            {" "}
            <a className="darkButton"href="#">Contact Me</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
