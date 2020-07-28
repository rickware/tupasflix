import React from "react";
import Logo from '../../assets/Logo.png';
//import ButtonLink from '../ButtonLink';
import "./Menu.css";
import Button from "../Button";

//TODO CORES DOS BOTOES E DEPLOY GITHUB 

function Menu () {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="DarkFlix Logo" /> 
      </a>
      <Button as="a" className="ButtonLink" href="/">
        Novo video
      </Button>
    </nav>
  )
}

export default Menu;
