import styled from 'styled-components';
import {COLORS} from '../../../common/colors';

export const Container = styled.button`
  width: 100%;
  border: none;
  height: 57px;
  padding: 16px 107px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
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
`;
