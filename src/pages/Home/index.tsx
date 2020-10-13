import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TestimonialsList from '../../components/TestimonialsList';

import illustrationTop from '../../assets/Illustration-top.svg';
import illustrationMiddle from '../../assets/Illustration-middle.svg';
import server from '../../assets/icons/server.svg';
import mapPin from '../../assets/icons/mapPin.svg';
import user from '../../assets/icons/user.svg';
import check from '../../assets/icons/check.svg';

import {
  Container,
  ContentWrapper,
  DescriptionContent,
  ListContent,
  MiddleSectionList,
  DragSectionContainer,
  DragSectionDescription,
  ActionContent,
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

        <img
          src={illustrationTop}
          alt="ilustração - pessoa com notebook"
          className="illustration-top"
        />
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

      <ContentWrapper>
        <img
          src={illustrationMiddle}
          alt="ilustração - pessoa com notebook interagindo"
          className="illustration-middle"
        />

        <MiddleSectionList>
          <h1>
            Gerencie as entregas
            <br />
            do seu comércio
          </h1>

          <p>Com a Loocal você possui total controle sobre suas entregas</p>

          <ul>
            <li>
              <img src={check} alt="check item" />
              <p>Insira créditos na plataforma de modo pré-pago</p>
            </li>
            <li>
              <img src={check} alt="check item" />
              <p>Entregadores segmentados por região</p>
            </li>
            <li>
              <img src={check} alt="check item" />
              <p>Dashboard completa com métricas sobre vendas</p>
            </li>
            <li>
              <img src={check} alt="check item" />
              <p>Acompanhamento em tempo real do seu pedido</p>
            </li>
          </ul>
        </MiddleSectionList>
      </ContentWrapper>

      <DragSectionContainer>
        <DragSectionDescription>
          <h1>
            Utilizada por centenas de
            <br />
            empreendedores 👀
          </h1>

          <p>
            Veja alguns depoimentos de comerciantes que utilizam a Loocal para
            gerenciar as demandas de entregas dos seus estabelecimentos
          </p>
        </DragSectionDescription>

        <TestimonialsList />
      </DragSectionContainer>

      <ActionContent>
        <div>
          <h2>
            Faça parte da
            <br />
            revolução 🎉
          </h2>

          <p>Traga seu comércio para a Loocal</p>
        </div>

        <button type="button">Quero fazer parte</button>
      </ActionContent>

      <Footer />
    </Container>
  );
};

export default Home;
