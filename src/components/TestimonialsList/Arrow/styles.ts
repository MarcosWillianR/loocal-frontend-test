import styled from 'styled-components';
import { lighten } from 'polished';

import { LIGHT_COLOR_1, MAIN_COLOR } from '../../../styles/variables';

export const Container = styled.button`
  width: 60px;
  height: 60px;

  background: ${MAIN_COLOR};
  border: 2px solid ${MAIN_COLOR};
  border-radius: 50%;
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.5s;

  svg {
    color: ${LIGHT_COLOR_1};
  }

  &:hover {
    background: ${lighten(0.015, MAIN_COLOR)};
  }

  @media screen and (max-width: 1000px) {
    width: 40px;
    height: 40px;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`;
