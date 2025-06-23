import React from "react";
import { NavLink } from "react-router-dom";



const Links = ({ links }) => {
  return (
    <>
      {links.map((link) => {
       const {id, text, url, icon} = link

       return (
         <li key={id} className="list-none">
           <NavLink to={url} className="menu">
             {icon ? <span className="text-2xl">{icon}</span> : <span>{text}</span>}
           </NavLink>
         </li>
       );
      })}
    </>
  );
};

export default Links;
