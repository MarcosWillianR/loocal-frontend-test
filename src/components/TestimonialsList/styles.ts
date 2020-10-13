import styled from 'styled-components';
import { darken } from 'polished';

import {
  DARK_GREY_COLOR,
  MAIN_COLOR,
  LIGHT_COLOR_1,
} from '../../styles/variables';

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  position: relative;

  div.menu-item-wrapper {
    padding-right: 50px;
    cursor: grab;

    @media screen and (max-width: 530px) {
      padding-right: 25px;
    }

    &:hover div {
      transition: border-color 0.5s ease;
      border-color: ${MAIN_COLOR};
    }
  }

  .scroll-menu-arrow {
    position: absolute;
    right: 0;
    bottom: -120px;

    @media screen and (max-width: 530px) {
      display: none;
    }

    @media screen and (max-width: 1000px) {
      bottom: -60px;
    }

    &:first-of-type {
      right: 80px;

      @media screen and (max-width: 1230px) and (min-width: 1001px) {
        right: 102px;
      }

      @media screen and (max-width: 1000px) {
        right: 50px;
      }
    }

    &:last-of-type {
      @media screen and (max-width: 1230px) and (min-width: 1001px) {
        margin-right: 22px;
      }
    }
  }

  .scroll-menu-arrow--disabled button {
    cursor: not-allowed;
    background: ${LIGHT_COLOR_1};

    svg {
      color: ${MAIN_COLOR};
    }

    &:hover {
      background: ${darken(0.02, LIGHT_COLOR_1)};
    }
  }
`;

export const ListItem = styled.div`
  max-width: 400px;
  height: 230px;
  padding: 30px;

  border: 2px solid #ddd;
  border-radius: 10px;

  div {
    display: flex;
  }

  & > div > img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  p {
    margin-top: 10px;
    line-height: 30px;
  }
`;

export const Title = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;

  strong {
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;
  }

  span {
    font-weight: 400;
    font-size: 14px;
    color: ${DARK_GREY_COLOR};
  }
`;

export const StarsCount = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-right: 12px;
  }

  img {
    width: 13px;
    height: 13px;
  }
`;
