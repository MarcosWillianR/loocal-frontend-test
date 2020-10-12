import styled from 'styled-components';
import { shade } from 'polished';

import {
  DARK_GREY_COLOR,
  LIGHT_COLOR_4,
  LIGHT_COLOR_1,
  MAIN_COLOR,
} from '../../styles/variables';

export const Container = styled.footer`
  background: ${LIGHT_COLOR_4};
  padding: 100px 22px;

  @media screen and (max-width: 1000px) {
    padding: 50px 22px;
  }

  > div {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    margin-top: 150px;

    @media screen and (max-width: 1000px) {
      margin-top: 75px;
    }

    @media screen and (max-width: 830px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const SocialContent = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 830px) {
    margin-bottom: 75px;
  }

  > img {
    width: 122px;
    height: 47px;
  }

  small {
    margin-top: 13px;
    margin-left: 10px;
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
    color: ${DARK_GREY_COLOR};
  }

  > div {
    display: flex;
    margin-top: 80px;

    @media screen and (max-width: 830px) {
      margin-top: 20px;
    }
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;

    & + a {
      margin-left: 20px;
    }

    background: ${LIGHT_COLOR_1};
    width: 34px;
    height: 34px;
    border-radius: 50%;
    box-shadow: 0px 10px 20px 0px rgba(11, 19, 42, 0.1);
    transition: background-color 0.675s;

    svg {
      color: ${MAIN_COLOR};
      transition: color 0.5s ease-in-out;
    }

    &:hover {
      background: ${MAIN_COLOR};

      svg {
        color: ${LIGHT_COLOR_1};
      }
    }
  }
`;

export const SiteMapListContent = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;

  @media screen and (max-width: 620px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  div + div {
    margin-left: 81px;

    @media screen and (max-width: 620px) {
      margin-left: 0;
      margin-top: 30px;
    }
  }

  strong {
    display: block;
    font-size: 18px;
    font-weight: 500;
    line-height: 30px;
    margin-bottom: 20px;

    @media screen and (max-width: 620px) {
      text-align: center;
    }
  }

  li {
    @media screen and (max-width: 620px) {
      text-align: center;
    }
  }

  li + li {
    margin-top: 10px;
  }

  a {
    text-decoration: none;
    color: ${DARK_GREY_COLOR};
    line-height: 30px;
    transition: color 0.5s ease;

    &:hover {
      color: ${shade(0.4, DARK_GREY_COLOR)};
    }
  }
`;
