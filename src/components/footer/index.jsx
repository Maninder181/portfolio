import React from "react";
import styles from "./footer.module.scss";
const Footer = () => {
  const socialIcon = [
    {
      img: "assets/icons/facebook.svg",
    },
    {
      img: "assets/icons/Instagram.svg",
    },
    {
      img: "assets/icons/twitter.svg",
    },
    {
      img: "assets/icons/linkedIn.svg",
    },
  ];
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer_wrap}>
          <div className={styles.logo}>
            <img src="/assets/images/logo.png" alt="" width={150} />
          </div>
          <div className={styles.nav_wrap}>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/portfolio">Portfolio</a>
              </li>
              <li>
                <a href="/about">About me</a>
              </li>
              <li>
                <a href="#">Testimonials</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className={styles.socal_icon}>
            <ul>
              {socialIcon.map((item, index) => {
                return (
                  <li key={index}>
                    <a href="#">
                      <img src={item.img} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {/* <div className={styles.copyright}>
            Made with 💖 by 
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
