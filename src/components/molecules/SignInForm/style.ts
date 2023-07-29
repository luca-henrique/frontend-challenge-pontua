import styled from 'styled-components';
import {COLORS} from '../../../common/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContainerForm = styled.div`
  border-radius: 28px;
  background-color: #fff;
  padding: 49px 33px;
  width: 331px;
`;

export const Title = styled.h1`
  color: ${COLORS.blue800};
  font-family: Epilogue;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -2.34px;
`;

export const Paragraphy = styled.p`
  color: ${COLORS.gray700};
  font-family: Epilogue;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 127%;
  letter-spacing: -1.04px;
`;
