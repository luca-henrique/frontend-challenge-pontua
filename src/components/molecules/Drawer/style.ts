import styled from 'styled-components';
import {COLORS} from '../../../common/colors';

export const Container = styled.div`
  height: 100vh;
  width: 256px;
  display: flex;
  flex-direction: column;
  box-shadow: 6px 0px 18px 0px rgba(0, 0, 0, 0.06);
`;

export const Header = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #ebeff2;
  display: flex;
  align-items: center;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  gap: 8px;
`;

export const ItemList = styled.li`
  display: flex;
  flex-direction: row;
  width: 100%;
  color: ${COLORS.black};
  font-family: Epilogue;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.39px;

  height: 34px;

  border-radius: 10px;
  background: #f5f6f8;

  align-items: center;

  padding-left: 6px;
`;
