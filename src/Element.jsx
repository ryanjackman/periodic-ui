import React, { Component } from 'react';
import elementData from './moredata.json';
import styled from 'styled-components';

const ElementPage = styled.div`
  margin-left: 250px;
`;

const ElementCard = styled.div`
  float: left;
  width: 200px;
  margin-left: -250px;
  height: 200px;
  background-color: ${props => props.color};
  border: 10px double white;
  text-align: center
`;

const CardText = styled.h1`
  font-size: ${props => props.size ? props.size + 'px' : '2em'};
  margin: 5px 0;
`;

const ElementDetails = styled.div`
  float: right;
  width: 100%;
  backgroud-color: #999999;
`;

const category_color = [
  '#e8e8e8',
  '#ff6666',
  '#ffdead',
  '#ffbfff',
  '#ff99cc',
  '#ffc0c0',
  '#cccccc',
  '#cccc99',
  '#a1ffc3',
  '#e7ff8f',
  '#c0ffff'
];

const category_name = [
  'Unknown',
  'Alkali metal',
  'Alkaline earth metal',
  'Lan­thanide',
  'Actinide',
  'Transition metal',
  'Post-​transition metal',
  'Metalloid',
  'Polyatomic nonmetal',
  'Diatomic nonmetal',
  'Noble gas'
];

class Element extends Component {
  render() {
    const num = this.props.num;
    return (
      <ElementPage>
        <ElementCard color={category_color[elementData.category[num]]}>
          <CardText size={28}>{elementData.name[num]}</CardText>
          <CardText size={95}>{elementData.symbol[num]}</CardText>
          <CardText>{elementData.mass[num]}</CardText>
        </ElementCard>
        <ElementDetails>
          <p>Category: {category_name[elementData.category[num]]}</p>
        </ElementDetails>
        <div />
      </ElementPage>
    );
  }
}

export default Element;
