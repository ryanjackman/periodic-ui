import React, { Component } from 'react';
import elementData from './moredata.json';
import styled from 'styled-components';

const TableParent = styled.div`
  display: grid;
  grid-template-columns: repeat(18, auto);
`;

const ElementContainer = styled.div`
  ${props => props.col ? 'grid-column: ' + props.col: ''};
  ${props => props.row ? 'grid-row: ' + props.row: ''};

  padding-top: 100%;

  position: relative;
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

const Element = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  border: 1px solid black;
  margin: 1px;
  padding: 4px;

  background-color: ${props => props.color};
`;

const Space = styled.div`
  grid-column: ${props => props.col} / ${props => props.colend};
  grid-row: ${props => props.row} / ${props => props.rowend};

  height: ${props => props.height ? props.height : '20'}px;

  /*border: 1px solid black;
  margin-left: -1px;
  margin-bottom: -1px;*/
`;

const Title = styled.div`
  position: absolute;
  margin-left: 15%;
  top: 2.5vw;
  font-size: 10vw;

  // Fixed title size and position past 1024px
  @media screen and (min-width: 1025px) {
    font-size: 102.4px;
    margin-left: 153.594px;
    top: 25.6px;
  }
`;

class Table extends Component {

  render() {
    return (<React.Fragment>
      <Title>PeriodicUI</Title>
      <TableParent>
        {
          Object.keys(elementData.symbol).map((num, i) => {
            const element = <Element color={category_color[elementData.category[num]]}>{elementData.symbol[num]}</Element>
            // Lanthanide positioning
            if(elementData.category[num] === 3 && parseInt(num, 10) !== 57) {
              return <ElementContainer row={9} height={1} key={i}>{element}</ElementContainer>
            } else if (elementData.category[num] === 4  && parseInt(num, 10) !== 89) {
              //Actinide positioning
              return <ElementContainer row={10} height={1} key={i}>{element}</ElementContainer>
            } else {
              return <ElementContainer key={i}>{element}</ElementContainer>
            }
          })
        }
        <Space col={2} colend={18} row={1} rowend={1}>{" "}</Space>
        <Space col={3} colend={13} row={2} rowend={2}>{" "}</Space>
        <Space col={3} colend={13} row={3} rowend={3}>{" "}</Space>
        <Space col={1} colend={18} row={8} rowend={9} height={25}>{" "}</Space>
        <Space col={1} colend={4} row={9}  rowend={10}>{" "}</Space>
        <Space col={1} colend={4} row={10} rowend={11}>{" "}</Space>
      </TableParent>
    </React.Fragment>);
  }

}

export default Table;
