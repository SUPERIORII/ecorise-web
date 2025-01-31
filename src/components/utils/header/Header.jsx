import React, { useState } from "react";
import "./Header.css";
// import UpperHeader from "./headerutils/UpperHeader";
// import LowerHeader from "./headerutils/LowerHeader";

import { UpperHeader,LowerHeader } from "./headerutils/index";
import { HeaderMenu } from "../../../sources";



const Header = () => {

  const [links, setLInks] = useState(HeaderMenu);
  
  return (
    <header className="header">
      <UpperHeader />
      <LowerHeader links={links} setLinks={setLInks}/>

    </header>
  );
};

export default Header;
