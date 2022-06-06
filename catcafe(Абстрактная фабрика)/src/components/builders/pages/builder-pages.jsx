// абстрактный класс страницы
import React, { useEffect } from 'react';

import Singleton from '../../singleton/singleton'
import {textToUser} from '../../../const'

const singletonObject = new Singleton()

export const BuilderPages = {
    page: "",
    setPage: (page) => {
      BuilderPages.page = page
      return BuilderPages
    },
    setCounterSingleton: () => {

      useEffect(() => {
        singletonObject.incSingleton(BuilderPages.page)
      }, []);

      return BuilderPages
    },
    renderForm: (callback) => {

      return (
        <>
          {
          singletonObject.getSingleton()[BuilderPages.page] > 3 &&
              <h2>{textToUser}</h2>
          }
          { callback() }
        </>
      );

    }
}
