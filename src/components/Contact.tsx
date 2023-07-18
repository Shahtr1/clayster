import React, { useState } from "react";

import down_arrow from "../assets/icons/down-arrow.png";
import up_arrow from "../assets/icons/up-arrow.png";
import letter_box from "../assets/icons/letter-box.png";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showMore, setShowMore] = useState(false);

  return (
    <div
      className="Contact-wrapper"
      style={{
        marginTop: showMore ? 0 : "-38rem",
      }}
    >
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
            <form>
              <div className="Field-wrapper">
                <label>Your Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="Field-wrapper">
                <label>Your Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="Field-wrapper">
                <label>Your Message</label>
                <textarea
                  style={{ overflowWrap: "break-word" }}
                  placeholder="Type Here..."
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>

              <button type="submit">SEND MESSAGE</button>
            </form>
          </div>
        </div>
        <img src={letter_box} alt="letter box" className="Letter-box" />
      </div>
    </div>
  );
}

export default Contact;
