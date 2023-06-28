import React from "react";
import Footer from "../../Components/Footer/Footer";
import "./About.scss";

const About = ({ isNotAtTop, setIsNotAtTop }) => {
  return (
    <div id="top">
      <div className="about__intro">
        <div className="about__intro--image" />

        <div className="about__intro--text">
          <h1>About Us</h1>
          <p>
            Introducing Itis – Where Culinary Delights Take Flight! Welcome to
            Itis, your premier destination for delectable delights delivered
            straight to your doorstep. We take the art of food delivery to new
            heights, offering a tantalizing array of dishes that will make your
            taste buds dance with glee.
          </p>

          <p>
            At Itis, we understand that good food is not just a necessity but a
            passion. Our team of culinary wizards, armed with spatulas as their
            wands, conjures up mouthwatering creations inspired by flavors from
            around the globe. From sizzling stir-fries to juicy burgers, our
            menu is a fusion of tradition and innovation, ensuring a gastronomic
            adventure that will leave you craving for more.
          </p>

          <p>
            Join us on this epicurean journey and indulge in the unparalleled
            pleasure of exceptional food, brought to you by Itis, where taste
            meets adventure, and every bite is a celebration. Savor the magic –
            Itis, where cravings become enchantment!
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
