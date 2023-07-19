import React, { useRef, useState } from "react";
import { toast, ToastContainer, ToastOptions } from "react-toastify";
import emailjs from "emailjs-com";

function ContactForm(props: { variant: "desktop" | "mobile" }) {
  const form = useRef(null);
  const name = useRef(null);
  const email = useRef(null);
  const message = useRef(null);

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

  return (
    <>
      <ToastContainer />
      <div className="Form-wrapper">
        <form ref={form} onSubmit={sendEmail}>
          <div className="Field-wrapper">
            {props.variant === "desktop" && <label>Your Name</label>}
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              ref={name}
            />
          </div>
          <div className="Field-wrapper">
            {props.variant === "desktop" && <label>Your Email</label>}
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              ref={email}
            />
          </div>
          <div className="Field-wrapper">
            {props.variant === "desktop" && <label>Your Message</label>}
            <textarea
              style={{ overflowWrap: "break-word" }}
              placeholder="Type Here..."
              rows={6}
              name="message"
              ref={message}
            ></textarea>
          </div>
          <div
            className="Button-wrapper"
            style={{ width: props.variant === "desktop" ? "17rem" : "10rem" }}
          >
            <button
              type="submit"
              style={{ visibility: mailLoad ? "hidden" : "unset" }}
            >
              {props.variant === "desktop" ? "SEND MESSAGE" : "SEND"}
            </button>
            {mailLoad && (
              <div className="spinner-container">
                <div className="loading-spinner"></div>
              </div>
            )}
          </div>
        </form>
      </div>
    </>
  );
}

export default ContactForm;
