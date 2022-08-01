import styled, { css } from 'styled-components';

const titleSize = {
  small: (theme) => css`
    font-size: ${theme.font.sizes.medium};
  `,

  medium: (theme) => css`
    font-size: ${theme.font.sizes.large};
  `,

  big: (theme) => css`
    font-size: ${theme.font.sizes.xlarge};
  `,

  huge: (theme) => css`
    font-size: ${theme.font.sizes.xhuge};
    ${mediaFont(theme)};
  `,
};

const mediaFont = (theme) => css`
  @media ${theme.media.lteMedium} {
    font-size: ${theme.font.sizes.xlarge};
  }
`;

const titleCase = (uppercase) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
  //'se uppercase for verdadeiro, o texto vai parar uppercase, se for falso, nenhuma alteração é feita'
`;

export const Title = styled.h1`
  ${({ theme, colorDark, size, uppercase }) => css`
    color: ${colorDark ? theme.colors.primaryColor : theme.colors.white};
    //'se o tema for colorDark, ele vai ser primaryColor, se ele não for white, ele será white'

    ${titleSize[size](theme)};
    ${titleCase(uppercase)};
  `}
`;
