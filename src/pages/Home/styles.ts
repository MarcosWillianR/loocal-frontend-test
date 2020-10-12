import styled from 'styled-components';
import { lighten } from 'polished';

import {
  DARK_GREY_COLOR,
  MAIN_COLOR,
  MAIN_COLOR_LIGHT,
  LIGHT_COLOR_1,
  LIGHT_COLOR_3,
} from '../../styles/variables';

export const Container = styled.div``;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-top: 150px;

  img.illustration-top {
    position: relative;
    left: 50px;
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

export const ListContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 150px auto 0 auto;

  background: #fff;
  box-shadow: 0px 20px 30px 0px rgba(11, 19, 42, 0.1);
  padding: 42px 70px;

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;

    li {
      display: flex;

      &:nth-of-type(2) {
        border-left: 2px solid #eeeff2;
        border-right: 2px solid #eeeff2;
        margin: 0 90px;
        padding: 28px 90px;
      }

      div:first-of-type {
        margin-right: 36.5px;
        width: 55px;
        height: 55px;
        border-radius: 50%;
        background: ${MAIN_COLOR_LIGHT};
        display: flex;
        align-items: center;
        justify-content: center;
      }

      strong {
        font-size: 25px;
        font-weight: 700;
        line-height: 30px;
      }

      span {
        display: block;
        font-size: 20px;
        line-height: 30px;
        font-weight: 400;
        color: ${DARK_GREY_COLOR};
      }
    }
  }
`;

export const MiddleSectionList = styled.div`
  h1 {
    font-size: 35px;
    font-weight: 500;
    line-height: 50px;
  }

  p {
    margin: 15px 0;
    max-width: 400px;
    font-weight: 400;
    line-height: 30px;
    color: ${DARK_GREY_COLOR};
  }

  ul {
    list-style: none;

    li {
      display: flex;
      align-items: center;

      img {
        margin-right: 12px;
      }

      p {
        font-size: 14px;
        line-height: 30px;
        color: ${DARK_GREY_COLOR};
      }
    }
  }
`;

export const DragSectionContainer = styled.div`
  background: ${LIGHT_COLOR_3};
  margin-top: 150px;
  padding: 100px 0;
`;

export const DragSectionDescription = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  text-align: center;

  h1 {
    font-size: 35px;
    line-height: 50px;
    font-weight: 500;
  }

  p {
    max-width: 550px;
    line-height: 30px;
    margin: 20px 0 60px 0;
    color: ${DARK_GREY_COLOR};
  }
`;
