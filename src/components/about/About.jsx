import "./about.css";
import Mee from "../../img/gaurav4.jpg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Mee} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Hey! I' have worked on various projects involving different kinds of
          e-commerce and Blog application. As I have developed severale
          projects. which are mentioned in this portfolio itself. You can choose
          to visit anyone of them.
        </p>
        <p className="a-desc">
          I am a Front-end Developer, React.js Developer And last but not the
          least. I would love to be a part of your work so that not only. I can
          contribute there in. But also at the same time I can learn Myriad
          things. In the end , I am just a learner who is highly enthusiastic
          about learning new developing techniques.
        </p>
        <p className="a-desc"></p>
      </div>
    </div>
  );
};

export default About;
