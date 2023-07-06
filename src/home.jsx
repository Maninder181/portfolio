import React from "react";
import styles from "./styles/home.module.scss";
// import { useNavigate } from "react-router-dom";

const Home = () => {
  // const navigate = useNavigate();
  // const handleClick = () => {
  //   navigate("/about");
  // };
  const Skill = [
    {
      img: "/assets/icons/skillogo.png",
      title: "Design",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      img: "/assets/icons/skillogo.png",
      title: "Development",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      img: "/assets/icons/skillogo.png",
      title: "UI/UX",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
  ];
  const projects = [
    {
      img: "/assets/images/portfolio_1.png",
      title: "Ahuse",
    },
    {
      img: "/assets/images/portfolio_2.png",
      title: "Easy Rent",
    },
    {
      img: "/assets/images/portfolio_1.png",
      title: "App Dashboard",
    },
  ];
  const testimonal = [
    {
      img: "/assets/images/avatar_1.png",
      title: "Dianne Russell",
      subtitle: "Starbucks",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      img: "/assets/images/avatar_2.png",
      title: "Kristin Watson",
      subtitle: "Louis Vuitton",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      img: "/assets/images/avatar_3.png",
      title: "Kathryn Murphy",
      subtitle: "McDonald's",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
  ];

  return (
    <>
      <section
        className={styles.hero}
        style={{
          backgroundImage: "url('/assets/images/hero_image.png')",
        }}
      >
        <div className="container">
          <div className={styles.hero_content}>
            <div className={styles.left_box}>
              <h1 className={styles.title} data-aos="fade-up">
                Hy! I Am <span>Cathy Thomas</span>
              </h1>
              <p data-aos="fade-up">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
              <div className={styles.btn_wrap} data-aos="fade-up">
                <button className="darkButton" type="button">
                  Get In Touch
                </button>
              </div>
            </div>
            <div className={styles.right_box}>
              <img
                src="/assets/images/hero_image.png"
                style={{ width: "100%" }}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.my_expertise}>
        <div className="container">
          <div className={styles.expertise_content}>
            <div className={styles.expertise_box_left}>
              <h2 className={styles.section_title} data-aos="fade-up">
                My Awesome<span>Services</span>
              </h2>
              <p data-aos="fade-up">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
              <div className={styles.btn_wrap}>
                <button className="darkButton" type="button">
                  Download CV
                </button>
              </div>
            </div>
            <div className={`${styles.right_box} ${styles.expertise_box}`}>
              <div className={styles.left_box}>
                <div className={styles.skill_logo}>
                  <div className={styles.logo}>
                    <img
                      src="/assets/icons/skillogo.png"
                      alt=""
                      style={{ width: "80px" }}
                    />
                  </div>
                  <h3 data-aos="fade-up">Development</h3>
                  <p data-aos="fade-up">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros.
                  </p>
                  <div className={styles.btn_wrap} data-aos="fade-up">
                    <button className="button" type="button">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.right_box}>
                <div className={styles.skill_logo}>
                  <div className={styles.logo}>
                    <img
                      src="/assets/icons/skillogo.png"
                      alt=""
                      style={{ width: "80px" }}
                    />
                  </div>
                  <h3 data-aos="fade-up">Design</h3>
                  <p data-aos="fade-up">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros.
                  </p >
                  <div className={styles.btn_wrap} data-aos="fade-up">
                    <button className="button" type="button">
                      Learn More
                    </button>
                  </div>
                </div>
                <div className={styles.skill_logo}>
                  <div className={styles.logo}>
                    <img
                      src="/assets/icons/skillogo.png"
                      alt=""
                      style={{ width: "80px" }}
                    />
                  </div>
                  <h3>UI/UX</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros.
                  </p>
                  <div className={styles.btn_wrap}>
                    <button className="button" type="button">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.about}>
        <div className="container">
          <div className={styles.about_content}>
            <div className={styles.right_box}>
              <img
                src="/assets/images/about.png"
                style={{ width: "100%" }}
                alt=""
              />
            </div>
            <div className={styles.left_box}>
              <h2 className={styles.section_title} data-aos="fade-up">
                Designing Solutions, <span>Not Just Visuals</span>
              </h2>
              <p data-aos="fade-up">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                varius faucibus massa sollicitudin amet augue.
              </p>
              <div className={`${styles.describe_box} ${styles.describe_box1}`} data-aos="fade-up">
                <div className={styles.icon}>
                  <img src="/assets/icons/check_circle.svg" alt="" />
                </div>
                <div className={styles.content_box}>
                  <h3>Lorem ipsum dolor</h3>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce varius faucibus massa sollicitudin amet augue.
                  </p>
                </div>
              </div>
              <div className={`${styles.describe_box} ${styles.describe_box2}`} data-aos="fade-up">
                <div className={styles.icon}>
                  <img src="/assets/icons/check_circle1.svg" alt="" />
                </div>
                <div className={styles.content_box}>
                  <h3>Lorem ipsum dolor</h3>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce varius faucibus massa sollicitudin amet augue.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.projects}>
        <div className="container">
          <div className={styles.projects_content}>
            <h2 className={styles.section_title} data-aos="fade-up">
              Latest <span>Projects</span>
            </h2>
            <div className={styles.left_box} data-aos="fade-up">
              {projects.map((item, index) => {
                return (
                  <div className={styles.products_box} key={index}>
                    <div className={styles.product_img}>
                      <img
                        src={item.img}
                        alt=""
                        style={{ width: "100%", height: "100%" }}
                      />
                      <p className={styles.project_number}>
                        {index < 9 ? `0${index + 1}` : index + 1}
                      </p>
                    </div>
                    <div className={styles.product_data}>
                      <h3>{item.title}</h3>

                      {/* <button className="darkButton" type="button">
                        View In
                      </button> */}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section className={styles.testimonal}>
        <div className="container">
          <div className={styles.testimonal_content}>
            <h2 className={styles.section_title} data-aos="fade-up">
              Customer <span>Testimonials</span>
            </h2>
            <div className={styles.testimonal_box} data-aos="fade-up">
              {testimonal.map((item, index) => {
                return (
                  <div className={styles.box} key={index}>
                    <div className={styles.star_img}>
                      <img
                        src="/assets/icons/5stars.svg"
                        alt=""
                        style={{ height: "22px" }}
                      />
                    </div>
                    <p>{item.des}</p>
                    <div className={styles.testimonal_data}>
                      <div className={styles.product_img}>
                        <img
                          src={item.img}
                          alt=""
                          style={{ width: "50px", height: "50px" }}
                        />
                      </div>
                      <div className={styles.client_name}>
                        <h4>{item.title}</h4>
                        <p>{item.subtitle}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section className={styles.contact_wrap}>
        <div className="container">
          <div className={styles.testimonal_content}>          
            <h2 className={styles.section_title} data-aos="fade-up">
            Contact <span>Me</span>
            </h2>
            <p data-aos="fade-up">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <div className={styles.form_wrap}>
              <div className={styles.form_control}>
                <label>First name</label>
                <input type="text" />
              </div>
              <div className={styles.form_control}>
                <label>Last name</label>
                <input type="text" />
              </div>
              <div className={styles.form_control}>
                <label>Email</label>
                <input type="email" />
              </div>
              <div className={styles.form_control}>
                <label>Phone number</label>
                <input type="text" />
              </div>
              <div className={styles.form_control}>
                <label>Choose a topic</label>
                <select>
                  <option value="select one">select one</option>
                  <option value="">abc</option>
                </select>
              </div>
              <div className={styles.form_control}>
                <label>Message</label>
                <textarea placeholder="Type your message..." />
              </div>
              <div className={`${styles.form_control} ${styles.accept_terms}`}>
                <label>
                  <input type="checkbox" />I accept the terms
                </label>
              </div>
              <div className={`${styles.form_control} ${styles.submit_center}`} data-aos="fade-up">
                <button className="darkButton" type="button">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
