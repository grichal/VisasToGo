import React, { useState } from "react";
import "./socialmedia.css";
import img from '../assets/image.png'

const SocialMedia = () => {
  const data = [
    {
      name: "@visastogord",
      cardImage:
        img,
    },

  ];
  const redirectI = (()=>{
    window.location.href='https://www.instagram.com/visastogord/'
})
  const redirectF = (()=>{
    window.location.href='https://www.facebook.com/profile.php?id=100091582413156'
})
//   const redirectT = (()=>{
//     alert('coming soon')
// })

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
              <button onClick={redirectI} className="buttons-media" id="instagram">
                INSTAGRAM
              </button>
              <button onClick={redirectF} className="buttons-media" id="facebook">
                FACEBOOK
              </button>
              {/* <button onclick={redirectT} className="buttons-media" id="tweeter">
                TWEETER
              </button> */}
            </div>
          </div>
        );
      })}</div>
    </div>
  );
};

export default SocialMedia;
