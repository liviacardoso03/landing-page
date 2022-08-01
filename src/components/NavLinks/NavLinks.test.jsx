import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { NavLinks } from '.';
import mock from './mock';
import { theme } from '../../styles/theme';

describe('<NavLinks />', () => {
  it('should render links', () => {
    //'deve renderizar os links'

    renderTheme(<NavLinks links={mock} />);
    expect(screen.getAllByRole('link')).toHaveLength(mock.length);
    //'espero que todos os links que foram passados como parâmetro tenham o tamanho do mock'
  });

  it('should not render links', () => {
    //'não deve renderizar os links'

    renderTheme(<NavLinks />);
    expect(screen.queryAllByText(/link/i)).toHaveLength(0);
    //'espero que todos os links que foram passados como parâmetro não estejam na tela'
  });

  it('should render links', () => {
    //'deve renderizar os links'

    renderTheme(<NavLinks links={mock} />);
    expect(screen.getByText(/link 10/i).parentElement).toHaveStyleRule('flex-flow', 'column wrap', {
      media: theme.media.lteMedium,
    });
    //'espero que todos os links que foram passados como parâmetro tenham o tamanho do mock'
  });

  it('should match snapshot', () => {
    //'o snapshot deve "bater"'

    const { container } = renderTheme(<NavLinks links={mock} />);
    expect(container.firstChild).toMatchSnapshot();
    //'espero que todos os links que foram passados como parâmetro "batam" com o snapshot'
  });
});
