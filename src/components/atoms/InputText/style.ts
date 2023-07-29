import styled from 'styled-components';
import {COLORS} from '../../../common/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: row;
  background: ${COLORS.white};
  border: 0.7px solid ${COLORS.gray400};
  border-radius: 10px;
  padding: 20px 15px;
  align-items: center;

  &:hover {
    border: 0.7px solid ${COLORS.blue600};
  }
`;

export const Input = styled.input`
  color: ${COLORS.blue600};
  font-family: Epilogue;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -1.04px;
  border: none;
  height: 17px;
  width: 100%;
  border: none;

  &::placeholder {
    color: ${COLORS.gray400};
    font-family: Epilogue;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.91px;
  }

  &:-ms-input-placeholder {
    color: ${COLORS.gray400};
    font-family: Epilogue;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.91px;
  }

  &::-ms-input-placeholder {
    color: ${COLORS.gray400};
    font-family: Epilogue;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.91px;
  }
`;

export const ErrorMessage = styled.p`
  height: 14px;
  color: ${COLORS.orange500};
  font-family: Epilogue;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  margin: 6px 0px;
  padding-left: 15px;
`;
