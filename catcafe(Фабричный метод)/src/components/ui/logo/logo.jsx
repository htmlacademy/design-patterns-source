import React from 'react';
import LogoImage from 'src/assets/images/logo.cmp.svg';
import { AppRoute } from 'src/const';
import { Text, StyledLogo } from './styles';

function Logo(props) {
  // Логотип сайта с названием
  return (
    <StyledLogo to={AppRoute.MAIN}>
      <LogoImage />
      <Text>Кото кафе</Text>
    </StyledLogo>
  );
}

export default props => <Logo {...props} />
