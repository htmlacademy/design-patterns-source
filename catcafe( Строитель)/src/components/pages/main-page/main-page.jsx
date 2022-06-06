import React from 'react';
import About from 'src/components/blocks/about/about';
import StarsList from 'src/components/blocks/stars-list/stars-list';
import { TitleLevel } from 'src/components/ui/title/title';
import {BuilderPages} from '../../builders/pages/builder-pages'
import { PoolTime } from '../../pools/pool-time'

// Главная страница сайта
function MainPage({
  stars, // список лучших котов, отображаемых на главной странице
}) {
  console.log(PoolTime.getPull())
  return BuilderPages
  .setPage("Главная")
  .setCounterSingleton()
  .renderForm(
    () => {
      return(
        <>
          <About />
          <StarsList stars={stars} level={TitleLevel.H2} />
        </>
      )
    }
  )
}

export default MainPage;
