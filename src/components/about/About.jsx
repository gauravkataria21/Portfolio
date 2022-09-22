import "./about.css";
import Mee from "../../img/gaurav5.jpeg";

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
        <h1 className="a-title">About (Guri)</h1>
       
        <p className="a-sub">
           <p className="a-sub none">
          Hey! My nick name is Guri. I am SDE-1 in Mobile App Developement. I love to dig into new problems and solve them with programming language. I am pretty much comfortable in
            We Developement and Mobile App Developement. I am also Familiar with React.js, React-Native, Node.js, Express.js
            and MongoDB.
        </p>
          I have worked on various projects involving different kinds of
          e-commerce and Mobile Applications. As I have developed severale
          projects. A few web projects are mentioned in this portfolio itself. You can choose
          to visit anyone of them.
        </p>
        <p className="a-desc">
          {/* I would love to be a part of your work so that not only. I can
          contribute there in. But also at the same time I can learn Myriad
          things.*/} In the end , I am just a learner who is highly enthusiastic 
          about learning new developing techniques.
        </p>
      </div>
    </div>
  );
};

export default About;
