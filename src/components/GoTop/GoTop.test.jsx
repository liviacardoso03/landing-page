import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { GoTop } from '.';

describe('<GoTop />', () => {
  it('should render a go to top button', () => {
    //'deve renderizar o botão "go to top"'

    const { container } = renderTheme(<GoTop />);

    expect(screen.getByRole('link', { name: 'Go to top' })).toBeInTheDocument();

    expect(screen.getByRole('link', { name: 'Go to top' })).toHaveAttribute('href', '#');

    expect(container).toMatchSnapshot();
  });
});