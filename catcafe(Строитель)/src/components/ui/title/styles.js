import styled from 'styled-components';
import {TitleSize} from './title';

export const StyledTitle = styled.h1 `
  margin: 0;
  padding: 0;
  font-weight: 700;
  font-size: ${(props) => {
    let fontSize = '36px';
    if (props.$size === TitleSize.BIG) {
      fontSize = '44px';
    }
    if (props.$size === TitleSize.SMALL) {
      fontSize = '28px';
    }
    return fontSize;
  }};
  line-height: ${(props) => {
    let linePeight = '41px';
    if (props.size === TitleSize.BIG) {
      linePeight = '50px';
    }
    if (props.size === TitleSize.SMALL) {
      linePeight = '32px';
    }
    return linePeight;
  }};
`;
