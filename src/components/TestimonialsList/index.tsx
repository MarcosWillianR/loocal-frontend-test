import React, { useCallback } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import ScrollMenu from 'react-horizontal-scrolling-menu';

import starIcon from '../../assets/icons/star.svg';

import Arrow from './Arrow';

import { Container, ListItem, Title, StarsCount } from './styles';

const TestimonialsList: React.FC = () => {
  return (
    <Container>
      <ScrollMenu
        data={[1, 2, 3, 4].map(i => (
          <ListItem key={i}>
            <div>
              <img
                src="https://randomwordgenerator.com/img/picture-generator/52e6d34b4a57a814f1dc8460962e33791c3ad6e04e507441722978d6924cc6_640.jpg"
                alt="Teste"
              />

              <Title>
                <strong>Diego Silva</strong>
                <span>http://diegosilva.com</span>
              </Title>

              <StarsCount>
                <span>4.5</span>
                <img src={starIcon} alt="Icone de recomendação" />
              </StarsCount>
            </div>

            <p>
              “Com a Loocal conseguimos aumentar em 40% o número de vendas
              durante a pandemia, ótimo serviço!”
            </p>
          </ListItem>
        ))}
        arrowLeft={<Arrow icon={FiArrowLeft} />}
        arrowRight={<Arrow icon={FiArrowRight} />}
        hideSingleArrow
        wheel={false}
        alignCenter={false}
      />
    </Container>
  );
};

export default TestimonialsList;
