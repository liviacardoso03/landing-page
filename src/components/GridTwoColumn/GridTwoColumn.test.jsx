import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { GridTwoColumn } from '.';

import mock from './mock';

describe('<GridTwoColum />', () => {
  it('should render two column grid', () => {
    //'deve renderizar as duas colunas da grid'

    const { container } = renderTheme(<GridTwoColumn {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
