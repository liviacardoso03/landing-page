import { renderTheme } from '../../styles/render-theme';
import { GridImage } from '.';

import mock from './mock';

describe('<GridImage />', () => {
  it('should render with background', () => {
    //'deve renderizar com o fundo'

    const { container } = renderTheme(<GridImage {...mock} />);
    expect(container).toMatchSnapshot();
    //'espero que o container "bata" com o snapshot'
  });

  it('should render without background', () => {
    //'deve renderizar sem o fundo'

    const { container } = renderTheme(<GridImage {...mock} background={undefined} />);
    expect(container).toMatchSnapshot();
    //'espero que o container "bata" com o snapshot'
  });
});
