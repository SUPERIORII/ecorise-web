import React, { useState } from "react";
import "./Header.css";
import { UpperHeader,LowerHeader } from "./headerutils/index";
import { HeaderMenu } from "../../../sources";

import Wrapper from "../../styles/Header";



const Header = () => {

  const [links, setLInks] = useState(HeaderMenu);
  
  return (
    <Wrapper className="header">
      <UpperHeader />
      <LowerHeader links={links} setLinks={setLInks}/>

    </Wrapper>
  );
};

export default Header;
