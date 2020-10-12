import React from 'react';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { ImInstagram } from 'react-icons/im';

import logoFooter from '../../assets/logo.png';

import { Container, SocialContent, SiteMapListContent } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <div>
        <SocialContent>
          <img src={logoFooter} alt="Loocal - Rodapé" />
          <small>2020 - Santos/SP</small>

          <div>
            <a href="https://pt.wikipedia.org/wiki/Filosofia_helen%C3%ADstica">
              <FaFacebookF size={16} />
            </a>
            <a href="https://pt.wikipedia.org/wiki/Racionalismo">
              <FaTwitter size={16} />
            </a>
            <a href="https://pt.wikipedia.org/wiki/Escola_sof%C3%ADstica">
              <ImInstagram size={16} />
            </a>
          </div>
        </SocialContent>

        <SiteMapListContent>
          <div>
            <strong>Sistema Loocal</strong>
            <li>
              <a href="https://httpstatusdogs.com/">Guia rápido</a>
            </li>
            <li>
              <a href="https://httpstatusdogs.com/">FAQ</a>
            </li>
            <li>
              <a href="https://httpstatusdogs.com/">Tutoriais</a>
            </li>
            <li>
              <a href="https://httpstatusdogs.com/">Política de privacidade</a>
            </li>
            <li>
              <a href="https://httpstatusdogs.com/">Termos de serviço</a>
            </li>
          </div>

          <div>
            <strong>Para entregadores</strong>
            <li>
              <a href="https://httpstatusdogs.com/">Aplicativo móvel</a>
            </li>
            <li>
              <a href="https://httpstatusdogs.com/">FAQ</a>
            </li>
            <li>
              <a href="https://httpstatusdogs.com/">Tutoriais</a>
            </li>
            <li>
              <a href="https://httpstatusdogs.com/">Política de privacidade</a>
            </li>
            <li>
              <a href="https://httpstatusdogs.com/">Termos de serviço</a>
            </li>
          </div>

          <div>
            <strong>Sobre</strong>
            <li>
              <a href="https://httpstatusdogs.com/">Equipe</a>
            </li>
            <li>
              <a href="https://httpstatusdogs.com/">Novidades</a>
            </li>
          </div>
        </SiteMapListContent>
      </div>
    </Container>
  );
};

export default Footer;
