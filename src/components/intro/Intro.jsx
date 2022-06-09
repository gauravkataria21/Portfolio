import "./intro.css";
import Me from "../../img/14.svg";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Gaurav Kataria</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">UI/UX Designer</div>
              <div className="i-title-item">Frontend Developer</div>
              <div className="i-title-item">React js Developer</div>
              {/* <div className="i-title-item"></div> */}
            </div>
          </div>
          <p className="i-desc">
            I am React.js developer and I am pretty much comfortable in
            Front-end Developement. I am also Familiar with Node.js, Express.js
            and MongoDB. I can handle backend of Existing projects. But I am
            Comfortable in Front-end Developent because i like make the layout
            of whole design in a code.
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
