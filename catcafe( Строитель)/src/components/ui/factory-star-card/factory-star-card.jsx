import React from 'react';
import SpecialStarCard from '../special-star-card/special-star-card';
import StarCard from '../star-card/star-card';

// Фабрика для производства карточек с котами
export const FactoryStarCard = {
    title: null,
    setTitle(props){
      switch(props.type){
        case "special":
          this.title =`Редкий ${props.name}`
          return this
        default:
          this.title =`${props.name}`
          return this
      }
    },
    setCard(props){

      switch(props.type){
        case "special":
          return <SpecialStarCard {...props} name={this.title}/>
        default:
          return <StarCard {...props} name={this.title}/>
      }
    },
    create(type, props){
      switch(type){
        case "card":
          return this.setCard(props)
        case "title":
          return this.setTitle(props)
      }
    }

}
