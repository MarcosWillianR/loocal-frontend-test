import React from 'react';

import Header from '../../components/Header';

import illustrationTop from '../../assets/Illustration-top.svg';
import server from '../../assets/icons/server.svg';
import mapPin from '../../assets/icons/mapPin.svg';
import user from '../../assets/icons/user.svg';

import {
  Container,
  ContentWrapper,
  DescriptionContent,
  ListContent,
} from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />

      <ContentWrapper>
        <DescriptionContent>
          <h1>
            Solicite entregadores
            <br />
            de forma eficiente 🛵
          </h1>

          <p>
            Somos a solução que o seu comércio precisa pra lidar com entregas de
            forma prática e objetiva.
          </p>

          <button type="button">Entre em contato</button>
        </DescriptionContent>

        <img src={illustrationTop} alt="ilustração - pessoa com notebook" />
      </ContentWrapper>

      <ListContent>
        <ul>
          <li>
            <div>
              <img src={user} alt="900+ Entregadores - icone usuário" />
            </div>

            <div>
              <strong>900+</strong>
              <span>Entregadores</span>
            </div>
          </li>
          <li>
            <div>
              <img src={mapPin} alt="300+ Comerciantes - icone pin de mapa" />
            </div>

            <div>
              <strong>300+</strong>
              <span>Comerciantes</span>
            </div>
          </li>
          <li>
            <div>
              <img src={server} alt="+70% Conversão - icone servidor" />
            </div>

            <div>
              <strong>+70%</strong>
              <span>Conversão</span>
            </div>
          </li>
        </ul>
      </ListContent>
    </Container>
  );
};

export default Home;
