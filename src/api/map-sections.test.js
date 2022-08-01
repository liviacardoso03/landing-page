import { mapSectionContent, mapSections, mapSectionTwoColumns, mapTextGrid, mapImageGrid } from './map-sections';
import pagesFakeData from './dados.json';

describe('map-sections', () => {
  it('should render predefined section if no data', () => {
    //'deve renderizar uma seção pré-definida se não houver dados'

    const data = mapSections();
    expect(data).toEqual([]);
  });

  it('should render section with correct data', () => {
    //'deve renderizar uma seção com os dados corretos'

    const data = mapSections(pagesFakeData[0].sections);
    expect(data[0].component).toBe('section.section-two-columns');
  });

  it('should test section with invalid data', () => {
    //'deve testar a seção com os dados inválidos'

    const withNoTextOrImageGrid = mapSections([
      {
        __component: 'section.section-grid',
      },
    ]);

    const withNoComponent = mapSections([{}]);
    expect(withNoTextOrImageGrid).toEqual([
      {
        __component: 'section.section-grid',
      },
    ]);

    expect(withNoComponent).toEqual([{}]);
  });

  it('should test section.section-grid with no text_grid or image_grid', () => {
    //'deve testar a seção "section-grid" com nnenhum "text_grid" ou "image_grid"'

    const withNoTextOrImageGrid = mapSections([
      {
        __component: 'section.section-grid',
        image_grid: [{}],
      },
      {
        __component: 'section.section-grid',
        text_grid: [{}],
      },
    ]);

    expect(withNoTextOrImageGrid.length).toBe(2);
  });

  it('should map section two columns if data is empty', () => {
    //'deve mapear as seções two columns se os dados forem vazios'

    const data = mapSectionTwoColumns();

    expect(data.background).toBe(false);
    //'espero que o background seja falso'

    expect(data.component).toBe('');
    //'espero que o componente seja vazio'

    expect(data.sectionId).toBe('');
    //'espero que o sectionId seja vazio'

    expect(data.srcImg).toBe('');
    //'espero que a imagem seja "vazia"'

    expect(data.text).toBe('');
    //'espero que o texto seja vazio'

    expect(data.title).toBe('');
    //'espero que o título seja vazio'
  });

  it('should map section two columns with data', () => {
    //'deve mapear as seções two columns com os dados'

    const data = mapSectionTwoColumns({
      __component: 'section.section-two-columns',
      title: 'title',
      description: 'abc',
      metadata: {
        background: true,
        section_id: 'contact',
      },

      image: {
        url: 'a.svg',
      },
    });

    expect(data.background).toBe(true);
    //'espero que o background seja verdadeiro'

    expect(data.component).toBe('section.section-two-columns');
    //'espero que o component seja "section.section-two-columns"'

    expect(data.sectionId).toBe('contact');
    //'espero que o sectionId seja "contact"'

    expect(data.srcImg).toBe('a.svg');
    //'espero que a imagem seja "a.svg"'

    expect(data.text).toBe('abc');
    //'espero que o título seja "abc"'

    expect(data.title).toBe('title');
    //'espero que o title seja "title"'
  });

  it('should map section content with no data', () => {
    //'deve mapear a seção content sem os dados'

    const data = mapSectionContent();

    expect(data.background).toBe(false);
    //'espero que o background seja falso'

    expect(data.component).toBe('');
    //'espero que o componente seja vazio'

    expect(data.sectionId).toBe('');
    //'espero que o sectionId seja vazio'

    expect(data.title).toBe('');
    //'espero que o title seja vazio'

    expect(data.html).toBe('');
    //'espero que o html seja vazio'
  });

  it('should map section content', () => {
    //'deve mapear a seção content'

    const data = mapSectionContent({
      __component: 'section.section-content',
      title: 'Pricing',
      content: 'abc',
      metadata: {
        background: false,
        section_id: 'pricing',
      },
    });

    expect(data.background).toBe(false);
    //'espero que o background seja falso'

    expect(data.component).toBe('section.section-content');
    //'espero que o component seja "section.section-content"'

    expect(data.sectionId).toBe('pricing');
    //'espero que o sectionId seja "pricing"'

    expect(data.title).toBe('Pricing');
    //'espero que o title seja "Pricing"'

    expect(data.html).toBe('abc');
    //'espero que o html seja "abc"'
  });

  it('should map grid text with data', () => {
    //'deve mapear o grid text com os dados'

    const data = mapTextGrid({
      __component: 'section.section-grid',
      description: 'abc',
      title: 'My Grid',
      text_grid: [
        {
          title: 'Teste 1',
          description: 'Coisa',
        },

        {
          title: 'Teste 2',
          description: 'abc',
        },
      ],

      image_grid: [],
      metadata: {
        background: true,
        section_id: 'grid-one',
      },
    });

    expect(data.background).toBe(true);
    //'espero que o background seja true'

    expect(data.component).toBe('section.section-grid-text');
    //'espero que o component seja "section.section-grid-text"'

    expect(data.sectionId).toBe('grid-one');
    //'espero que o sectionId seja "grid-one"'

    expect(data.title).toBe('My Grid');
    //'espero que o title seja "My Grid"'

    expect(data.description).toBe('abc');
    //'espero que o description seja "abc"'

    expect(data.grid[0].title).toBe('Teste 1');
    //'espero que o grid array title seja "Teste 1"'

    expect(data.grid[0].description).toBe('Coisa');
    //'espero que o grid array description seja "Coisa"'
  });

  it('should map grid text without data', () => {
    //'deve mapear o grid text sem os dados'

    const data = mapTextGrid(undefined);

    expect(data.background).toBe(false);
    //'espero que o background seja falso'

    expect(data.component).toBe('section.section-grid-text');
    //'espero que o component seja "section.section-grid-text"'

    expect(data.sectionId).toBe('');
    //'espero que o sectionId seja vazio'

    expect(data.title).toBe('');
    //'espero que o title seja vazio'

    expect(data.description).toBe('');
    //'espero que a description seja vazia'
  });

  it('should map grid image without data', () => {
    //'deve mapear o grid image sem os dados'

    const data = mapImageGrid(undefined);

    expect(data.background).toBe(false);
    //'espero que o background seja falso'

    expect(data.component).toBe('section.section-grid-image');
    //'espero que o component seja "section.section-grid-image"'

    expect(data.sectionId).toBe('');
    //'espero que o sectionId seja vazio'

    expect(data.title).toBe('');
    //'espero que o title seja vazio'

    expect(data.description).toBe('');
    //'espero que a description seja vazia'
  });

  it('should map grid image with data', () => {
    //'deve mapear o grid image com os dados'

    const data = mapImageGrid({
      __component: 'section.section-grid',
      description: 'abc',
      title: 'Gallery',
      text_grid: [],
      image_grid: [
        {
          image: {
            alternativeText: 'abc',
            url: 'a.svg',
          },
        },
      ],

      metadata: {
        background: false,
        name: 'gallery',
        section_id: 'gallery',
      },
    });

    expect(data.background).toBe(false);
    //'espero que o background seja falso'

    expect(data.component).toBe('section.section-grid-image');
    //'espero que o component seja "section.section-grid-image"'

    expect(data.sectionId).toBe('gallery');
    //'espero que o sectionId seja "gallery"'

    expect(data.title).toBe('Gallery');
    //'espero que o title seja "Gallery"'

    expect(data.description).toBe('abc');
    //'espero que a description seja "abc"'

    expect(data.grid[0].srcImg).toBe('a.svg');
    //'espero que o grid array srcImg seja "a.svg"'

    expect(data.grid[0].altText).toBe('abc');
    //'espero que o grid array altText seja "abc"'
  });
});
