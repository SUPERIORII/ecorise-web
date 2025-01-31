import React, { useState } from "react";
import { AiOutlineMail, AiOutlinePhone, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaWhatsapp} from "react-icons/fa";




const UpperHeader = () => {
  const [showMenu, setShowMenu] = useState(false)

  


  const displayMenu =()=>{
    setShowMenu(!showMenu)

    console.log(showMenu);
    
  }
  
  
  return (
    <div className="upperHeader">
      <div className="menu-wrapper">
        {showMenu ? (
          <AiOutlineMenu className="ergi-menu" onClick={displayMenu} />
        ) : (
          <AiOutlineClose className="ergi-menu-close"  onClick={displayMenu} />
        )}

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

      <section className="rightUpperHeader">
        <div className="social-icons">
          <a href="">
            <FaFacebook className="social-link-icon" />
          </a>
          <a href="">
            <FaWhatsapp className="social-link-icon" />
          </a>
          <a href="">
            <FaInstagram className="social-link-icon" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default UpperHeader;
