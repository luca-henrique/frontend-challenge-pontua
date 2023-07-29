import styled from 'styled-components';
import {COLORS} from '../../../common/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-top: 21px;
  justify-content: flex-end;
`;

export const IconRecoveryAccount = styled.img`
  width: 14px;
  height: 14px;
  margin-right: 4px;
`;

export const Link = styled.p`
  color: ${COLORS.orange500};
  font-family: Epilogue;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.715px;
`;
