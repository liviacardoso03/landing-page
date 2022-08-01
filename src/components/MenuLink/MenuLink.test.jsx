import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { MenuLink } from '.';

describe('<MenuLink />', () => {
  it('should render a link', () => {
    //'deve renderizar um link'

    // renderTheme(<MenuLink link="https://www.google.com.br">Children</MenuLink>);
    // expect(screen.getByRole('link', { name: 'Children' })).toBeInTheDocument();
    //'espero que o link esteja no documento na tela'

    renderTheme(<MenuLink link="https://www.google.com.br">Children</MenuLink>);
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute('target', '_self');
    //'espero que o link tenha o seguinte atributo: target e _self'
  });

  it('should render open in a new tab', () => {
    //'deve renderizar ao abrir uma nova aba'

    renderTheme(
      <MenuLink link="https://www.google.com.br" newTab={true}>
        Children
      </MenuLink>,
    );
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute('target', '_blank');
    //'espero que o link tenha o seguinte atributo: target e _blank'
  });

  it('should match with snapshot', () => {
    const { container } = renderTheme(
      <MenuLink link="http://localhost" newTab={false}>
        Children
      </MenuLink>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
