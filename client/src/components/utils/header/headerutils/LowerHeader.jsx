import React, { useState } from "react";
import logo from "/src/assets/logo.png";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const LowerHeader = ({ links, setLinks }) => {
  const [selected, setIsSelected] = useState(null);
  const [showMenu, setShowmenu] = useState(false);

  // toogling the close and menu icons
  const displayIcon = () => {
    setShowmenu(!showMenu);
  };

  const getId = (id) => {
    // get the id
    setIsSelected(id);
    setShowmenu(false);
  };

  return (
    <div className="lowerHeader">
      <section className="left-lower-header">
        {showMenu ? (
          <AiOutlineClose className="nav-close-icon" onClick={displayIcon} />
        ) : (
          <AiOutlineMenu className="nav-menu-icon" onClick={displayIcon} />
        )}

        {/* ===============Logo=============  */}

        <div className="nav-left">
          <img className="logo" src={logo} alt="Logo" />
          <h3>EcoRise Global Initiatives</h3>
        </div>

        {/* <div className="search-wrapper">
          <FaSearch className="search-icon" />
        </div> */}
      </section>

      {/* ============MIDDLE LOWER HEADER================== */}
      <section
        className={
          showMenu ? "middle-lower-header show" : "middle-lower-header"
        }
      >
        {links.map((link) => {
          return (
            <div
              className={
                selected === link.id
                  ? "tracker-wrapper active"
                  : `tracker-wrapper`
              }
              key={link.id}
            >
              <Link to={link.linkUrl} onClick={() => getId(link.id)}>
                <span>{link.linkName}</span>
              </Link>
              <div className="tracker"></div>
            </div>
          );
        })}
      </section>

      {/* =================right middle header===================== */}
      <section className="donate-btn-container">
        <button className="donate-btn">Donate Now</button>
      </section>
    </div>
  );
};

export default LowerHeader;
