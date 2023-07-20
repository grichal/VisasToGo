import React from "react";

import "./contactUs.css";

const ContactUs = () => {
  return (
    <section className="contactUs" id="contactUs">
      <h1 className="contactTitle">CONTACTANOS</h1>
      <div className="contactUs-content">
        <div className="contactItem">
          <div className="left">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png"
              alt=""
            />
          </div>
          <div className="right">
            <div className="name">
              <h1>LIC. ISAIAS</h1>
              <h1>GRULLON</h1>
            </div>
            <div className="button">
              <button>HABLA VIA WHATSAPP</button>
            </div>
          </div>
        </div>
        <div className="contactItem">
          <div className="left">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png"
              alt=""
            />
          </div>
          <div className="right">
            <div className="name">
              <h1>VISAIRA </h1>
              <h1>HERNANDEZ</h1>
            </div>
            <div className="button">
              <button>HABLA VIA WHATSAPP</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
