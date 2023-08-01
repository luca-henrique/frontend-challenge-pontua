import styled from 'styled-components';
import {COLORS} from '../../common/colors';

export const Container = styled.div`
  background-color: ${COLORS.blue800};
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
`;
