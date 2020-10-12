import styled, { css, keyframes } from 'styled-components';
import { shade } from 'polished';

import {
  DARK_GREY_COLOR,
  MAIN_COLOR,
  LIGHT_COLOR_1,
} from '../../styles/variables';

const navigationAnimaOpen = keyframes`
  from {
    transform: translateY(10px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

interface ContainerProps {
  menuIsOpen: boolean;
}

interface HamburguerIconProps {
  menuIsOpen: boolean;
}

export const Container = styled.header<ContainerProps>`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 22px;
  position: relative;

  img {
    width: 122px;
    height: 47px;
    margin-bottom: 8px;
  }

  nav > button {
    display: none;
    position: relative;
    z-index: 99999;
    background: 0;
    border: 0;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    transition: all 0.5s ease-in-out;

    @media (max-width: 760px) {
      display: block;
    }
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

    @media (max-width: 760px) {
      display: ${props => (props.menuIsOpen ? 'flex' : 'none')};
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      position: absolute;
      left: 0;
      margin-top: 30px;
      height: 250px;
      z-index: 99999;
      background: ${MAIN_COLOR};
      animation: ${navigationAnimaOpen} 0.5s linear;

      li {
        margin: 20px 0 !important;

        a {
          color: ${LIGHT_COLOR_1};

          &:hover {
            color: ${LIGHT_COLOR_1};
          }

          &.button-style,
          &.button-style:hover {
            color: ${LIGHT_COLOR_1};
            border-color: ${LIGHT_COLOR_1};
          }
        }
      }
    }
  }
`;

export const HamburguerIcon = styled.div<HamburguerIconProps>`
  width: 40px;
  height: 3px;
  background: ${MAIN_COLOR};
  border-radius: 6px;
  transition: all 0.5s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 40px;
    height: 3px;
    background: ${MAIN_COLOR};
    border-radius: 6px;
    transition: all 0.5s ease-in-out;
  }

  &:before {
    transform: translateY(-12px);
  }

  &:after {
    transform: translateY(12px);
  }

  ${props =>
    props.menuIsOpen &&
    css`
      transform: translateX(-50px);
      background: transparent;
      &:before {
        transform: rotate(45deg) translate(35px, -35px);
      }
      &:after {
        transform: rotate(-45deg) translate(35px, 35px);
      }
    `}
`;
