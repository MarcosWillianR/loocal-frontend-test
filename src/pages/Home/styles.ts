import styled from 'styled-components';
import { lighten } from 'polished';

import {
  DARK_GREY_COLOR,
  MAIN_COLOR,
  LIGHT_COLOR_1,
} from '../../styles/variables';

export const Container = styled.div``;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  margin-top: 100px;

  img {
    position: relative;
    left: 100px;
    top: 30px;
  }
`;

export const DescriptionContent = styled.div`
  h1 {
    font-size: 50px;
    font-weight: 500;
    line-height: 70px;
  }

  p {
    max-width: 520px;
    margin-top: 20px;
    font-weight: 400;
    line-height: 30px;
    color: ${DARK_GREY_COLOR};
  }

  button {
    margin-top: 45px;
    background: ${MAIN_COLOR};
    border-radius: 10px;
    padding: 18px 55px;
    border: 0;

    color: ${LIGHT_COLOR_1};
    font-weight: 700;
    line-height: 25px;

    box-shadow: 0px 10px 20px 0px rgba(0, 165, 54, 0.3);
    transition: all 0.5s ease;

    &:hover {
      background: ${lighten(0.015, MAIN_COLOR)};
    }
  }
`;
