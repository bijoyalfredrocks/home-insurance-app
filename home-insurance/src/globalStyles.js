import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  letter-spacing: 0.015rem;
 } 
`;

export const Container = styled.div`
  z-index: 1;
  margin-right: auto;
  margin-left: auto;
  padding: 30px 20px 30px 20px;
  @media screen and (max-width: 450px) {
    padding: 20px 20px 20px 20px;;
  }
`;

export const Button = styled.button`
  border-radius: 10px;
  background: ${({ primary }) => (primary ? '#0275d8' : '#d9534f')};
  white-space: nowrap;
  padding: 16px 30px;
  color: #fff;
  width:${({ large }) => (large ? '80%' : '240px')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};  
  outline: none;
  border: none;
  text-align: center;
  cursor: pointer;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export default GlobalStyle;
