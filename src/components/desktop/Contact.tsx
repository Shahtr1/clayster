import React, { useRef, useState } from "react";

import down_arrow from "../../assets/icons/down-arrow.png";
import up_arrow from "../../assets/icons/up-arrow.png";
import letter_box from "../../assets/icons/letter-box.png";
import { toast, ToastContainer, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import emailjs from "emailjs-com";

function Contact() {
  const form = useRef(null);
  const name = useRef(null);
  const email = useRef(null);
  const message = useRef(null);

  const [showMore, setShowMore] = useState(false);
  const [mailLoad, setMailLoad] = useState(false);

  const sendEmail = (e: any) => {
    e.preventDefault();

    const toastProperties: ToastOptions = {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      style: { fontSize: "2rem" },
    };

    const emailVal: string = (email.current as any).value;
    const nameVal: string = (name.current as any).value;
    const messageVal: string = (message.current as any).value;

    if (emailVal && nameVal && messageVal) {
      setMailLoad(true);
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_ID as string,
          process.env.REACT_APP_TEMPLATE_ID as string,
          // @ts-ignore
          form.current,
          process.env.REACT_APP_PUBLIC_KEY as string,
        )
        .then(
          (result) => {
            setMailLoad(false);
            e.target?.reset();
            toast.success("Mail Sent!", toastProperties);
          },
          (error) => {
            console.error(error.text);
            setMailLoad(false);
            toast.error("Oops! Something went wrong.", toastProperties);
          },
        );
    } else {
      toast.info("Please fill all fields!", toastProperties);
    }
  };

  // @ts-ignore
  return (
    <div
      className="Contact-wrapper"
      id="contact"
      style={{
        marginTop: showMore ? 0 : "-38rem",
      }}
    >
      <ToastContainer />
      <div className="Title-wrapper">
        <span className="Title" onClick={() => setShowMore(!showMore)}>
          {showMore ? "Show Less" : "Show More..."}
          {!showMore && (
            <img
              src={down_arrow}
              className="Down-arrow"
              alt="down arrow"
              width="30px"
            />
          )}
          {showMore && (
            <img
              src={up_arrow}
              className="Up-arrow"
              alt="up arrow"
              width="30px"
            />
          )}
        </span>
      </div>

      <div className="Contact">
        <div className="Dust"></div>
        <div className="Content-wrapper">
          <div className="Heading">
            Let's <span>talk</span>
          </div>
          <div className="Subheading">
            To request a quote or want to meet up for a coffee, contact me
            directly or fill out form and i will get back to you soon
          </div>
          <div className="Form-wrapper">
            <form ref={form} onSubmit={sendEmail}>
              <div className="Field-wrapper">
                <label>Your Name</label>
                <input type="text" name="user_name" ref={name} />
              </div>
              <div className="Field-wrapper">
                <label>Your Email</label>
                <input type="email" name="user_email" ref={email} />
              </div>
              <div className="Field-wrapper">
                <label>Your Message</label>
                <textarea
                  style={{ overflowWrap: "break-word" }}
                  placeholder="Type Here..."
                  rows={6}
                  name="message"
                  ref={message}
                ></textarea>
              </div>
              <div className="Button-wrapper">
                <button
                  type="submit"
                  style={{ visibility: mailLoad ? "hidden" : "unset" }}
                >
                  SEND MESSAGE
                </button>
                {mailLoad && (
                  <div className="spinner-container">
                    <div className="loading-spinner"></div>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
        <img src={letter_box} alt="letter box" className="Letter-box" />
      </div>
    </div>
  );
}

export default Contact;
