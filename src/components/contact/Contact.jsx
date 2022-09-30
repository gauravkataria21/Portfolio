import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import insta from "../../img/insta.png";
import linkedin from "../../img/linkedin.png";
import Address from "../../img/way2.gif";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";
import { toast } from "react-toastify";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = async (e) => {
    e.preventDefault();

    (function () {
      
      emailjs.init("vCMkpEvIa_QLTogZN");
    })();
    await emailjs
      .sendForm("service_3qr24sn", "template_n54xw9f", formRef.current)
      .then(
        (result) => {
          console.log(result.text);
          toast.info("The Mail has been sent to Gaurav...", {
            autoClose: 2000,
          });
          setDone(true);
        },
        (error) => {
          console.log(error.text);
          toast.error("something went wrong", {
            autoClose: 2000,
          });
        }
      );
    setTimeout(() => {
      window.location.replace("/");
    }, 2500);
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your Query..!</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +91 6397 34 6918
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              gauravkatariya29@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Chandigarh ( India )
            </div>
            <div className="c-social-item">
              <a href="instagram.com/___just_gaurav_____/" target="_blank" className="social-link" rel="noreferrer">
        <img src={insta} alt="" height={40}width={40} />
      </a>
              <a href="https://www.linkedin.com/in/itsgauravkatariaa/" target="_blank" className="social-link" rel="noreferrer">
        <img src={linkedin} alt="" height={40}width={40} />
      </a>
              
              
            
            </div>
           
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>You can contact me...!</b> You can contact me by filling this
            form i will get your message automatically.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor:  "white",borderBottomColor:"black" }}
              type="text"
               className={darkMode && "white"}
              placeholder="Your Name"
              name="user_name"
            />
            <input
              style={{ backgroundColor:  "white",borderBottomColor:"black"  }}
              type="text"

              className={darkMode && "white"}
              
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{ backgroundColor:  "white",borderBottomColor:"black" }}
              type="text"
               className={darkMode && "white"}
              placeholder="Your Email"
              name="user_email"
            />
            <textarea
              style={{ backgroundColor:  "white",borderBottomColor:"black" }}
              rows="5"
               className={darkMode && "white"}
              placeholder="Message"
              name="message"
            />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
