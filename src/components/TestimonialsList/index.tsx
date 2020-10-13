import React, { useEffect, useState } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import ScrollMenu from 'react-horizontal-scrolling-menu';

import api from '../../services/apiClient';

import starIcon from '../../assets/icons/star.svg';

import Arrow from './Arrow';

import { Container, ListItem, Title, StarsCount } from './styles';

interface Testimonial {
  name: string;
  website: string;
  image: string;
}

interface TestimonialResponse {
  data: {
    firstname: string;
    lastname: string;
    website: string;
    image: string;
  }[];
}

const TestimonialsList: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    api.get<TestimonialResponse>('persons').then(response => {
      setTestimonials(
        response.data.data.map(({ firstname, website, image, lastname }) => ({
          name: `${firstname} ${lastname}`,
          image,
          website,
        })),
      );
    });
  }, []);

  return (
    <Container>
      {testimonials.length !== 0 && (
        <ScrollMenu
          data={testimonials.map(({ website, image, name }) => (
            <ListItem key={`${name}-${website}`}>
              <div>
                <img src={image} alt={name} />

                <Title>
                  <strong>{name}</strong>
                  <span>{website}</span>
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
      )}
    </Container>
  );
};

export default TestimonialsList;
