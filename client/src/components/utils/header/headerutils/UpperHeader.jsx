import React, { useState } from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";




const UpperHeader = () => {


  return (
    <div className="upperHeader">
      <div className="menu-wrapper">
        

      </div>
      <section className="middleUpperHeader">
        <div className="mail-warpper">
          <AiOutlineMail className="icon" />
          <span className="email">ecoriseglobalinitiative@gmail.com</span>
        </div>

        <div className="phone-warpper">
          <AiOutlinePhone className="icon" />
          <span className="email">+231778786395</span>
        </div>
      </section>



    </div>
  );
};

export default UpperHeader;
