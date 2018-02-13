import React, { Component } from 'react';
import elementData from './moredata.json';
import styled from 'styled-components';

const TableParent = styled.div`
  display: grid;
  grid-template-columns: repeat(18, auto);
`;

const Element = styled.div`
  max-width: 50px;
  ${props => props.col ? 'grid-column: ' + props.col: ''};
  ${props => props.row ? 'grid-row: ' + props.row: ''};

  /*border: 1px solid black;
  margin-left: -1px;
  margin-bottom: -1px;*/
`;

const Space = styled.div`
  grid-column: ${props => props.col} / ${props => props.width};
  grid-row: ${props => props.row} / ${props => props.height};

  height: 20px;

  /*border: 1px solid black;
  margin-left: -1px;
  margin-bottom: -1px;*/
`;

class Table extends Component {

  render() {
    return (
      <TableParent>
        {
          Object.keys(elementData.symbol).map((object, i) => {
            if(elementData.category[object] === 3) {
              return <Element row={9} height={1} key={i}>{elementData.symbol[object]}</Element>
            } else if (elementData.category[object] === 4) {
              return <Element row={10} height={1} key={i}>{elementData.symbol[object]}</Element>
            } else {
              return <Element key={i}>{elementData.symbol[object]}</Element>
            }
          })
        }
        <Space col={2} width={18} row={1} height={1}>{" "}</Space>
        <Space col={3} width={13} row={2} height={2}>{" "}</Space>
        <Space col={3} width={3} row={6} height={6}>{" "}</Space>
        <Space col={3} width={3} row={7} height={7}>{" "}</Space>
        <Space col={3} width={13} row={3} height={3}>{" "}</Space>
        <Space col={1} width={18} row={8} height={9}>{" "}</Space>
        <Space col={1} width={3} row={9} height={10}>{" "}</Space>
        <Space col={1} width={3} row={10} height={11}>{" "}</Space>
      </TableParent>
    );
  }

}

export default Table;
