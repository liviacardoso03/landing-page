import { mapMenu, mapMenuLinks } from './map-menu';

describe('map-menu', () => {
  it('should return a predefined object if no data', () => {
    //'deve retornar um objeto pré-definido se não houver dados'

    const menu = mapMenu();

    expect(menu.newTab).toBe(false);
    //'espero ter uma nova aba'

    expect(menu.text).toBe('');
    //'espero ter um texto'

    expect(menu.srcImg).toBe('');
    //'espero ter uma imagem'

    expect(menu.link).toBe('');
    //'espero ter um link'
  });

  it('should map menu to match keys and values required', () => {
    //'o map menu deve "bater" com as chaves e valores requeridos [obrigatórios]'

    const menu = mapMenu({
      open_in_new_tab: false,
      logo_text: 'Landing Page',
      logo_link: '#home',

      menu: [
        {
          open_in_new_tab: false,
          link_text: 'pricing',
          url: '#pricing',
        },

        {
          open_in_new_tab: false,
          link_text: 'contact',
          url: '#contact',
        },
      ],

      logo: {
        url: 'a.svg',
      },
    });

    expect(menu.newTab).toBe(false);
    expect(menu.text).toBe('Landing Page');
    expect(menu.srcImg).toBe('a.svg');
    expect(menu.link).toBe('#home');
    expect(menu.links[0].newTab).toBe(false);
    expect(menu.links[0].children).toBe('pricing');
    expect(menu.links[0].link).toBe('#pricing');
  });

  it('should return an empty array if no links', () => {
    //'deve retornar um array vazio se não houver links'

    const links = mapMenuLinks();
    expect(links).toEqual([]);
  });

  it('should map links if links passed', () => {
    //'deve mapear os links se os links passarem'

    const links = mapMenuLinks([
      {
        open_in_new_tab: false,
        link_text: 'pricing',
        url: '#pricing',
      },
      {},
    ]);

    expect(links[0].newTab).toBe(false);
    expect(links[0].children).toBe('pricing');
    expect(links[0].link).toBe('#pricing');
  });
});
