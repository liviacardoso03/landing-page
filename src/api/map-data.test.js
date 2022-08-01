import { mapData } from './map-data';

describe('map-data', () => {
  it('should map data even if there is no data', () => {
    //'deve mapear os dados mesmo que não existam dados'

    const pagesData = mapData()[0];

    expect(pagesData.footerHtml).toBe('');

    expect(pagesData.slug).toBe('');

    expect(pagesData.title).toBe('');
  });

  it('should map data if there are data', () => {
    //'deve mapear os dados se houver dados'

    const pagesData = mapData([
      {
        footer_text: '<p>Hey</p>',
        slug: 'slug',
        title: 'title',
      },
    ])[0];

    expect(pagesData.footerHtml).toBe('<p>Hey</p>');

    expect(pagesData.slug).toBe('slug');

    expect(pagesData.title).toBe('title');
  });
});
