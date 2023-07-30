import styled from 'styled-components';
import {COLORS} from '../../../common/colors';

export const Container = styled.button`
  border: none;
  height: 57px;
  justify-content: center;
  align-items: center;
  background: ${COLORS.blue600};
  color: ${COLORS.white};
  border-radius: 10px;
  font-family: Epilogue;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  display: flex;
  flex-direction: row;
  width: 100%;
`;
