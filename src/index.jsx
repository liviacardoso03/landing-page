import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/global-styles';
import { theme } from './styles/theme';
import Home from './templates/Home';
import styled, { css } from 'styled-components';

const root = createRoot(document.getElementById('root'));

const changeBackground = (theme) => css`
  background: ${({ theme }) => theme.colors.mediumGray};
`;
export const Container = styled.div`
  background: ${({ theme }) => theme.colors.pink};
  //Essa função pega diretamente do elemento do 'theme' a cor ou o elemento que desejamos trazer para a página
  //Função
  ${({ theme }) => css`
    color: ${theme.colors.white};
    ${changeBackground(theme)}
  `}
`;

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Container></Container>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
