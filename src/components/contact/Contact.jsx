import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
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
          <h1 className="c-title">Let's discuss your project</h1>
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
              Meerut, Uttar pradesh ( India )
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
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Your Name"
              name="user_name"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Your Email"
              name="user_email"
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              rows="5"
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
