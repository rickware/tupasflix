import React from "react";
import Logo from '../../assets/Logo.png';
import { Link } from 'react-router-dom';
//import ButtonLink from '../ButtonLink';
import "./Menu.css";
import Button from "../Button";

//TODO CORES DOS BOTOES E DEPLOY GITHUB 

function Menu () {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="TupasFlix logo" />
      </Link>

      <Button className="ButtonLink" to="/cadastro/video">
        Novo vídeo
      </Button>
    </nav>
  )
}

export default Menu;
