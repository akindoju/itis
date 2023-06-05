import React from "react";
import Footer from "../../components/Footer/Footer";
import "./About.scss";

const About = ({ isNotAtTop, setIsNotAtTop }) => {
  return (
    <div id="top">
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
        <div className="about__temp--image about__temp--image--1">
          <img
            src="
            https://images.unsplash.com/photo-1568717099337-5aaecc090548?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
            alt="Our Store"
          />
        </div>

        <div className="about__temp--text">
          <h1>Our Store</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In
            recusandae, itaque repudiandae dicta eum blanditiis numquam dolore,
            fuga facilis enim magnam voluptates pariatur? Animi eveniet sunt
            tempora facere soluta excepturi voluptatum nobis, id labore, ipsum,
            et distinctio cumque velit nisi perferendis fugiat. Velit ducimus
            voluptas ab aspernatur! Minima, modi perferendis.
          </p>
        </div>
      </div>

      <div className="about__temp">
        <div className="about__temp--text">
          <h1>Mission Statement</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro qui
            officiis beatae deleniti. Nisi eveniet laboriosam architecto
            officiis suscipit laudantium deserunt illo omnis! Aperiam officiis
            dicta at! Deserunt quasi molestiae quibusdam beatae fugit vitae
            atque sit tempora, sapiente ducimus aliquid commodi aperiam
            necessitatibus! Eius dolor culpa fugiat? Aliquam, quidem tempora ex
            dolores alias perspiciatis optio!
          </p>
        </div>

        <div className="about__temp--image about__temp--image--2">
          <img
            src="https://images.unsplash.com/photo-1622711321771-4a00d2bc0350?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
            alt="Mission Statement"
          />
        </div>
      </div>

      <div className="about__temp">
        <div className="about__temp--image about__temp--image--3">
          <img
            src="https://images.unsplash.com/photo-1608219994488-cc269412b3e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
            alt="Our Story"
          />
        </div>

        <div className="about__temp--text">
          <h1>Our Story</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa odit
            officia harum qui deserunt modi, necessitatibus vero? Voluptas
            doloremque praesentium cumque maxime libero ullam ex accusantium
            esse a facere aspernatur odio, vel excepturi reiciendis ut harum
            officiis placeat aliquid sed eaque! Dolore, iste accusamus id, rerum
            repudiandae at doloremque sequi illum quis voluptas minus nobis
            cupiditate magni laborum incidunt expedita?
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
