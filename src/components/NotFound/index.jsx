import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../PageDefault';

function NotFound() {
  return (
    <PageDefault>
      <h1>OOPS!  Nao encontrado.</h1>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default NotFound;
