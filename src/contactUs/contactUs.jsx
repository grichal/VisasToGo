import React from "react";

import "./contactUs.css";

const ContactUs = () => {

  const redirectPhone = ()=>{
    window.location.href = `tel:${8093652011}`
    
  }

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
            <div className="button" onClick={()=>window.location.href="https://wa.me/18297637928?text=Hola,%20quisiera%20saber%20mas%20acerca%20de%20los%20servicios%20de%20Visas%20to%20Go%20RD"}>
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
              <h1>NUMERO DE </h1>
              <h1>OFICINA</h1>
            </div>
            <div className="button">
              <button onClick={redirectPhone}>+1 (809) 365-2011</button>
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
            <div className="button" onClick={()=>window.location.href="https://wa.me/18493431019?text=Hola,%20quisiera%20saber%20mas%20acerca%20de%20los%20servicios%20de%20Visas%20to%20Go%20RD"}>
              <button>HABLA VIA WHATSAPP</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
