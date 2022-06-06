import React, { useEffect } from 'react';
import About from 'src/components/blocks/about/about';
import StarsList from 'src/components/blocks/stars-list/stars-list';
import { TitleLevel } from 'src/components/ui/title/title';
import Singleton from '../../singleton/singleton'
import {textToUser} from '../../../const'

const singletonObject = new Singleton()

// Главная страница сайта
function MainPage({
  stars, // список лучших котов, отображаемых на главной странице
}) {

  useEffect(() => {
    singletonObject.incSingleton('Главная')
  }, []);

  return (
    <>
      {
      singletonObject.getSingleton()["Покупка билетов"] > 3 &&
           <h2>{textToUser}</h2>
      }
      <About />
      <StarsList stars={stars} level={TitleLevel.H2} />
    </>
  );
}

export default MainPage;
