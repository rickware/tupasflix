import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import './Menu.css';
import Button from '../Button';

function Menu() {
  return (
    <nav className="Menu">
      <div>
        <Link to="/">
          <img className="Logo" src={Logo} alt="TupasFlix logo" />
        </Link>
      </div>
      <div>
        <Button to="/cadastro/video">
          Novo vídeo
        </Button>
      </div>
    </nav>
  );
}

export default Menu;
