import React from 'react';

import CageGallery from 'src/components/blocks/cafe-gallery/cafe-gallery';
import Buy from 'src/components/blocks/buy/buy';
import {BuilderPages} from '../../builders/pages/builder-pages'

// страница покупки билетов
function BuyPage({
  slides, // список слайдов для галереи
  buyOptions, // опции покупки билетов
}) {

  return BuilderPages
  .setPage('Покупка билетов')
  .setCounterSingleton()
  .renderForm(
    () => {
      return(
        <>
          <CageGallery slides={slides} />
          <Buy buyOptions={buyOptions} />
        </>
      )
    }
  )
}

export default BuyPage;
