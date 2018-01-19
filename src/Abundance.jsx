import React, { Component } from 'react';
import elementData from './moredata.json';
import styled from 'styled-components';

import universe from './img/universe.png';
import solar from './img/solar.png';
import meteor from './img/meteor.png';
import crust from './img/crust.png';
import ocean from './img/ocean.png';
import human from './img/human.png';

const Icon = styled.img`
  width: 25px;
  height: 25px;
  display: inline;
  vertical-align: middle;
  margin-right: 5px;
`;

const Text = styled.p`
  display: inline;
  vertical-align: middle;
  width: 200px;
`;

class Abundance extends Component {

  getAbundance(num, area) {
    const abundance = elementData.abundance[area][num];

    return abundance ? abundance + '%' : 'None';
  }

  render() {
    const num = this.props.num;

    return (
      <div>
        <strong>Abundance</strong>
        <div style={{"margin-left": "2em"}}>
          <Text><Icon src={universe} />Universe: {this.getAbundance(num, 'universe')}</Text><br/>
          <Icon src={solar} /><Text>Solar System: {this.getAbundance(num, 'solar')}</Text><br/>
          <Icon src={meteor} /><Text>Meteor: {this.getAbundance(num, 'meteor')}</Text><br/>
          <Icon src={crust} /><Text>Crust: {this.getAbundance(num, 'crust')}</Text><br/>
          <Icon src={ocean} /><Text>Ocean: {this.getAbundance(num, 'ocean')}</Text><br/>
          <Icon src={human} /><Text>Human: {this.getAbundance(num, 'human')}</Text><br/>
        </div>
      </div>
    );
  }
}

export default Abundance;
