import React from 'react';
import Button from 'src/components/ui/button/button';
import Title from 'src/components/ui/title/title';

import {FactoryStarCard} from '../../ui/factory-star-card/factory-star-card';

import { AppRoute } from 'src/const';
import { StarItem, StarList, StyledStarsList } from './styles';

// список известных котов
function StarsList({
  stars, // коты
  level, // уровень заголовка списка.
}) {

  const FactoryStarCardItem = FactoryStarCard

  return (
    <StyledStarsList>
      { stars && stars.length ?
        (
          <>
            <Title level={level}>Наши звёзды</Title>
            <StarList $isGridList>
              {stars.map( (star) => {
                return(
                  <StarItem key={star.id}>
                    {
                      FactoryStarCardItem
                      .create('title', star)
                      .create('card', star)
                    }
                  </StarItem>
                )
              },
              )}
            </StarList>
          </>
        ) : null}
      <Button minWidth={353} link={AppRoute.BUY}>Купить билет</Button>
    </StyledStarsList>
  );
}

export default StarsList;
