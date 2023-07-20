import React, { useState } from "react";
import "./socialmedia.css";

const SocialMedia = () => {
  const data = [
    {
      name: "@RobertoGrullon",
      cardImage:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29uYXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
      instagram: "",
      facebook: "",
      tweeter: "",
    },

  ];

  return (
    <div className="cardcontainer-media">
      <div className="titulo">
        <h1 className="titulo">REDES SCIALES</h1>
      </div>
      <div className="cardcontent">
      {data.map((data, index) => {
        return (
          <div className="card-media" key={index}>
            <div className="cardimage-media">
              <img src={data.cardImage} alt="" />
            </div>
            <div className="cardname-media">{data.name}</div>
            <div className="cardbuttons-media">
              <button className="buttons-media" id="instagram">
                INSTAGRAM
              </button>
              <button className="buttons-media" id="facebook">
                FACEBOOK
              </button>
              <button className="buttons-media" id="tweeter">
                TWEETER
              </button>
            </div>
          </div>
        );
      })}</div>
    </div>
  );
};

export default SocialMedia;
