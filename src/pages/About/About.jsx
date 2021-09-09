import React from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import ScrollTopBtn from "../../components/ScrollTopBtn/ScrollTopBtn";
import "./About.scss";

const About = ({ isNotAtTop, setIsNotAtTop }) => {
  const settingScrollTopBtn = () => {
    window.scrollY > 150 ? setIsNotAtTop(true) : setIsNotAtTop(false);
  };

  window.addEventListener("scroll", settingScrollTopBtn);

  return (
    <div id="top">
      {isNotAtTop && <ScrollTopBtn />}
      <NavBar />

      <div className="about__intro">
        <div className="about__intro--image" />

        <div className="about__intro--text">
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
            totam natus repellat quae voluptate id sit mollitia facere hic
            ullam? Excepturi saepe nesciunt, laborum eum sapiente autem
            cupiditate non vel ad amet ex neque facilis cum eveniet distinctio
            libero voluptatem quis doloribus aut architecto explicabo. Officiis,
            ducimus? Recusandae a sunt expedita nostrum impedit repellendus
            deserunt dicta illum consequatur eligendi aspernatur necessitatibus
            ad, incidunt inventore quas! Nobis, quod corrupti fuga rerum labore
            non asperiores reiciendis expedita quidem. Similique magni libero
            blanditiis repellat obcaecati architecto numquam a dolor deleniti
            quae voluptas culpa, cum et facere beatae? Quaerat unde praesentium
            deserunt ullam qui!
          </p>
        </div>
      </div>

      <div className="about__temp">
        <div className="about__temp--image">
          <img
            src="https://images.unsplash.com/photo-1622711321771-4a00d2bc0350?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
            alt="Our Store"
          />
        </div>

        <div className="about__temp--text">
          <h1>Our Store</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            tempora odit nisi sequi amet earum ea ratione repellendus, quibusdam
            commodi beatae sunt a possimus magni reiciendis incidunt et facilis
            minus nobis provident voluptate veritatis! Id autem porro nemo,
            perferendis, repudiandae impedit quasi itaque esse commodi hic a
            praesentium necessitatibus, consequuntur expedita officia culpa
            animi enim recusandae minus vero corrupti voluptate quae. Nobis quas
            necessitatibus inventore. Eveniet, delectus. Ex tempora deserunt
            atque nihil ab enim velit ullam, voluptate placeat laudantium ipsum.
          </p>
        </div>
      </div>

      <div className="about__temp">
        <div className="about__temp--text">
          <h1>Mission Statement</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            tempora odit nisi sequi amet earum ea ratione repellendus, quibusdam
            commodi beatae sunt a possimus magni reiciendis incidunt et facilis
            minus nobis provident voluptate veritatis! Id autem porro nemo,
            perferendis, repudiandae impedit quasi itaque esse commodi hic a
            praesentium necessitatibus, consequuntur expedita officia culpa
            animi enim recusandae minus vero corrupti voluptate quae. Nobis quas
            necessitatibus inventore. Eveniet, delectus. Ex tempora deserunt
            atque nihil ab enim velit ullam, voluptate placeat laudantium ipsum.
          </p>
        </div>

        <div className="about__temp--image">
          <img src="" alt="" />
        </div>
      </div>

      <div className="about__temp">
        <div className="about__temp--image">
          <img src="" alt="" />
        </div>

        <div className="about__temp--text">
          <h1>Our Story</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            tempora odit nisi sequi amet earum ea ratione repellendus, quibusdam
            commodi beatae sunt a possimus magni reiciendis incidunt et facilis
            minus nobis provident voluptate veritatis! Id autem porro nemo,
            perferendis, repudiandae impedit quasi itaque esse commodi hic a
            praesentium necessitatibus, consequuntur expedita officia culpa
            animi enim recusandae minus vero corrupti voluptate quae. Nobis quas
            necessitatibus inventore. Eveniet, delectus. Ex tempora deserunt
            atque nihil ab enim velit ullam, voluptate placeat laudantium ipsum.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
