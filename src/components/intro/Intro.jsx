import "./intro.css";
import Me from "../../img/vector.png";


const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Gaurav Kataria</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              {/* <div className="i-title-item">Web Developer</div> */}
              <div className="i-title-item">SDE-1</div>
              <div className="i-title-item">Mobile App Developer</div>
              <div className="i-title-item">React.js Developer</div>
              <div className="i-title-item">React-Native</div>
              <div className="i-title-item">JavaScript Developer</div>
              <div className="i-title-item">Frontend Developer</div>
              {/* <div className="i-title-item"></div> */}
            </div>
          </div>
          <p className="i-desc">
            I am SDE-1 in Mobile App Developement. I love to dig into new problems and solve them with programming language. I am pretty much comfortable in
            We Developement and Mobile App Developement. I am also Familiar with React.js, React-Native, Node.js, Express.js
            and MongoDB.
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
