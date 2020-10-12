import React from 'react';

import Header from '../../components/Header';

import illustrationTop from '../../assets/Illustration-top.png';

import { Container, ContentWrapper, DescriptionContent } from './styles';

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
    </Container>
  );
};

export default Home;
