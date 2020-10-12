import React from 'react';

import logo from '../../assets/logo.png';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <img src={logo} alt="Loocal" />

      <nav>
        <ul>
          <li>
            <a href="https://brilliant.org/">Sobre</a>
          </li>
          <li>
            <a href="https://brilliant.org/">Testemunhos</a>
          </li>
          <li>
            <a href="https://brilliant.org/" className="button-style">
              Área do comerciante
            </a>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default Header;
