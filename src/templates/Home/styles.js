import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  //Funções para poder utilizar JavaScript aqui dentro
  //Foi criada uma função para que fosse possível ter acesso as props

  ${({ theme, background }) => css`
    background: ${theme.colors.secondaryBg};
  `}
`;
