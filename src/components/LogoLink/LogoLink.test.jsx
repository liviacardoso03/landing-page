import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { LogoLink } from '.';

describe('<LogoLink />', () => {
  it('should render text logo', () => {
    //'deve renderizar o texto da logo'

    renderTheme(<LogoLink link="#target" text="Olá, Mundo!" />);

    expect(screen.getByRole('link', { name: 'Olá, Mundo!' })).toHaveAttribute('href', '#target');
    //'espero que o link tenha como atributo o 'href' e o '#target''
  });

  it('should render image logo', () => {
    //'deve renderizar a imagem da logo'

    renderTheme(<LogoLink link="#target" text="Olá, Mundo!" srcImg="image.jpg" />);

    expect(screen.getByAltText('Olá, Mundo!')).toHaveAttribute('src', 'image.jpg');
    //'espero que tenha na tela o "Olá, Mundo!" e ele tenha como atributo o 'src' e a '#image.jpg''
  });

  it('should match snapshot', () => {
    //'o snapshot deve "bater" com o código que foi escrito'

    const { container } = renderTheme(<LogoLink link="#target" text="Olá, Mundo!" srcImg="image.jpg" />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
