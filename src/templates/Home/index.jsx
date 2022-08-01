import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import * as Styled from './styles';

import { mapData } from '../../api/map-data';

import { Heading } from '../../components/Heading';
import { GridTwoColumn } from '../../components/GridTwoColumn';
import { GridContent } from '../../components/GridContent';
import { GridText } from '../../components/GridText';
import { GridImage } from '../../components/GridImage';

import { mockBase } from '../Base/mock';
import { Base } from '../Base';
import { PageNotFound } from '../PageNotFound';
import { Loading } from '../Loading';

import config from '../../config';

function Home() {
  const [data, setData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname.replace(/[ˆa-z0-9-_]/gi, '');
    const slug = pathname ? pathname : config.defaultSlug;

    const load = async () => {
      try {
        const data = await fetch(config.url + slug); //Parte em que faz a requisição pela API
        const json = await data.json();
        const pageData = mapData(json);
        setData(pageData[0]);
      } catch (e) {
        console.log(e);
        setData(undefined);
      }
    };

    load();
  }, [location]);

  useEffect(() => {
    if (data === undefined) {
      document.title = `Página não encontrada | ${config.siteName}`; //Títulos das páginas na web
    }
    if (data && !data.slug) {
      document.title = `Carregando... | ${config.siteName}`; //Títulos das páginas na web
    }

    if (data && !data.title) {
      document.title = `${data.title} | ${config.siteName}`; //Títulos das páginas na web
    }
  }, [data]);

  if (data === undefined) {
    return <PageNotFound />;
  }
  if (data && !data.slug) {
    return <Loading />;
  }

  const { menu, sections, footerHtml, slug } = data;
  const { links, text, link, srcImg } = menu;

  return (
    <Base links={links} footerHtml={footerHtml} logoData={{ text, link, srcImg }}>
      {sections.map((section, index) => {
        const { component } = section;
        const key = `${slug}-${index}`;

        if (component === 'section.section-two-columns') {
          return <GridTwoColumn key={key} {...section} />;
        }

        if (component === 'section.section-content') {
          //Traz os componentes do 'section-content' para a página
          return <GridContent key={key} {...section} />;
        }

        if (component === 'section.section-grid-text') {
          //Traz os componentes do 'section-grid-text' para a página

          return <GridText key={key} {...section} />;
        }

        if (component === 'section.section-grid-image') {
          //Traz os componentes do 'section-grid-image' para a página

          return <GridImage key={key} {...section} />;
        }
      })}
    </Base>
  );
}
console.log('ha');
export default Home;
