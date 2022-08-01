import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { GridText } from '.';

import mock from './mock';

describe('<GridText />', () => {
  it('should render with background', () => {
    //'deve renderizar com o fundo'

    const { container } = renderTheme(<GridText {...mock} />);
    expect(container).toMatchSnapshot();
    //'espero que o container "bata" com o snapshot'
  });

  it('should render without background', () => {
    //'deve renderizar sem o fundo'

    const { container } = renderTheme(<GridText {...mock} background={undefined} />);
    expect(container).toMatchSnapshot();
    //'espero que o container "bata" com o snapshot'
  });
});
