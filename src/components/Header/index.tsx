import React, { useState, useCallback } from 'react';

import logo from '../../assets/logo.png';

import { Container, HamburguerIcon } from './styles';

const Header: React.FC = () => {
  const [menuMobileIsOpen, setMenuMobileIsOpen] = useState(false);

  const toggleMenuMobile = useCallback(() => {
    setMenuMobileIsOpen(state => !state);
  }, []);

  return (
    <Container menuIsOpen={menuMobileIsOpen}>
      <img src={logo} alt="Loocal" />

      <nav>
        <button type="button" onClick={toggleMenuMobile}>
          <HamburguerIcon menuIsOpen={menuMobileIsOpen} />
        </button>

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
