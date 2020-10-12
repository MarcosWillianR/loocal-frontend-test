import styled from 'styled-components';
import { shade } from 'polished';

import { DARK_GREY_COLOR, MAIN_COLOR } from '../../styles/variables';

export const Container = styled.header`
  width: 100%;
  max-width: 920px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 0;

  img {
    width: 122px;
    height: 47px;
  }

  ul {
    list-style: none;
    display: flex;

    li + li {
      margin-left: 60px;
    }

    a {
      text-decoration: none;
      color: ${DARK_GREY_COLOR};
      transition: color 0.5s ease;

      &:hover {
        color: ${shade(0.4, DARK_GREY_COLOR)};
      }
    }

    a.button-style {
      border: 1px solid ${MAIN_COLOR};
      border-radius: 50px;
      padding: 13px 42px;
      font-weight: 500;
      color: ${MAIN_COLOR};

      &:hover {
        color: ${shade(0.15, MAIN_COLOR)};
        border-color: ${shade(0.15, MAIN_COLOR)};
      }
    }
  }
`;
