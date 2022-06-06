import React, { useEffect } from 'react';

import CageGallery from 'src/components/blocks/cafe-gallery/cafe-gallery';
import Buy from 'src/components/blocks/buy/buy';
import Singleton from '../../singleton/singleton'
import {textToUser} from '../../../const'

const singletonObject = new Singleton()

// страница покупки билетов
function BuyPage({
  slides, // список слайдов для галереи
  buyOptions, // опции покупки билетов
}) {

  useEffect(() => {
    singletonObject.incSingleton('Покупка билетов')
  }, []);

  return (
    <>
      {
      singletonObject.getSingleton()["Покупка билетов"] > 3 &&
           <h2>{textToUser}</h2>
      }
      <CageGallery slides={slides} />
      <Buy buyOptions={buyOptions} />
    </>
  );
}

export default BuyPage;
