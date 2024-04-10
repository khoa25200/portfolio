import React from "react";
import Section from "../components/Section";
import ResumePDF from "../assets/CV Fresher.pdf";
import SGCartoon from "../assets/sagnik_cartoon.png";
import _getProfileApi from "../api/_getProfileApi";

const SocialIcon = ({ href, icon }) => {
  return (
    // eslint-disable-next-line react/jsx-no-target-blank
    <a
      className="social-icon"
      href={href}
      target="_blank"
    >
      {icon}
    </a>
  );
};

export default function Home() {
  const icons = _getProfileApi[0]?.socialIcons;
  return (
    <Section id="about">
      <div className="row justify-content-between">
        <div className="col-md-6 order-last order-lg-first" data-aos="fade-up">
          <h1 className="mb-0">
            Nguyen
            <span className="text-primary" style={{ paddingLeft: "2vw" }}>
              Dang Khoa
            </span>
          </h1>
          <div className="subheading mb-3">
            <span style={{ paddingRight: "0.3vw" }}>No Pain No Gain!</span>
            <span style={{ paddingRight: "0.3vw" }}>·</span>
            <a href="mailto:dangkhoa2520ss@gmail.com" className="home-mail">
              dangkhoa2520ss@gmail.com
            </a>
          </div>
        </div>
        <div className="col-md-3 mb-5 mb-lg-0" data-aos="fade-up">
          <img
            src={SGCartoon}
            alt="Dang Khoa Cartoon"
            style={{ height: "20vh", width: "20vh" }}
          />
        </div>
      </div>

      <p className="lead mb-4">
        I’m a software engineer who loves creating websites. I believe that you
        have to be able to see the big picture when you’re building something,
        and that’s why I like to work with a team. It’s also why I love working
        in groups where everyone has a voice, but we all work together toward
        the same goal—to make your site better than you could ever do on your
        own.
        <br />
        <br />
        I love building websites that are easy to use and can be accessed
        by anyone. I also love making my clients happy with their site’s
        performance, so they can see it on any device they have.
      </p>

      <div className="btn-group mb-5">
        <button
          className="btn btn-primary btn-custom py-2 px-5 CV-Button"
          type="submit"
          onClick={() => window.open(ResumePDF)}
        >
          Download CV
        </button>
        <div className="social-icons">
        {icons.map(({ href, icon }, index) => (
          <SocialIcon href={href} icon={icon} key={index} />
        ))}
      </div>
      </div>

    
    </Section>
  );
}
