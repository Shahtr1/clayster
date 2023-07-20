import React from "react";
import Title from "../common/Title";
import ContactForm from "../common/Contact-form";

function ContactMb(props: { smallIntro: boolean }) {
  return (
    <div className="Contact-mb-wrapper">
      <Title
        title="Let's talk"
        variant="small"
        smallIntro={props.smallIntro}
      ></Title>
      <div className="Contact-mb-form-wrapper">
        <ContactForm variant="mobile"></ContactForm>
      </div>
    </div>
  );
}

export default ContactMb;
