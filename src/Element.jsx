import React, { Component } from 'react';
import elementData from './moredata.json';
import styled from 'styled-components';
import ordinal from 'ordinal';

import Abundance from './Abundance';

const ElementPage = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  background-color: #FFFFFF;
`;

const ElementCard = styled.div`
  flex-basis: 200px;
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
  flex: 1 0 auto;
  margin: 10px 10px 10px 10px;
  text-align: ${props => props.right ? "right" : 'none'};
  max-width: calc(512px - 110px);
  display: flex;
  flex-direction: column;
  align-items: ${props => props.right ? "flex-end" : 'flex-begin'};
`;

const DetailCard = styled.div`
  text-align: left;
  display: inline-block;
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
  'Lanthanide',
  'Actinide',
  'Transition metal',
  'Post-​transition metal',
  'Metalloid',
  'Polyatomic nonmetal',
  'Diatomic nonmetal',
  'Noble gas'
];

class Element extends Component {

  formatDiscoveryYear(num) {
    const year = elementData.discover[num];
    if(!year) {
      return null;
    }
    const formattedYear = year > 0 ? year + "AD" : Math.abs(year) + "BC";
    return <p>Discovered: {formattedYear}</p>;
  }

  formatIonizationEnergies(num) {
    let ionizations = [];

    elementData.ionize.forEach((level) => {
      if (num in level) {
        ionizations.push(level[num]);
      } else {
        return;
      }
    });

    let str = "";
    ionizations.forEach((level, i) => {
      str += ordinal(parseInt(i + 1, 10)) + ": " + level + " ";
    });

    return <p>Ionization Energies: {str}</p>;
  }

  render() {
    const num = this.props.num;
    return (
      <ElementPage>
        <ElementDetails right>
          <DetailCard>
            <p>Category: {category_name[elementData.category[num]]}</p>
          </DetailCard>
          <DetailCard>
            <p>Electronegativity: {elementData.electroneg[num]}</p>
          </DetailCard>
          <DetailCard>
            {this.formatDiscoveryYear(num)}
          </DetailCard>
          <DetailCard>
          <p>Electron Affinity: {elementData.affinity[num]} kJ/mol</p>
          </DetailCard>
          <DetailCard>
            <strong style={{"text-align": "right"}}>Heat</strong>
            <div style={{"margin-left": "2em"}}>
              <p>Specific: {elementData.heat.specific[num]} J/kg/K</p>
              <p>Vaporization: {elementData.heat.vaporization[num]} kJ/mol</p>
              <p>Fusion: {elementData.heat.fusion[num]} kJ/mol</p>
            </div>
          </DetailCard>
          <DetailCard>
            <strong>Radius</strong>
            <div style={{"margin-left": "2em"}}>
              <p>Calculated: {elementData.radius.calculated[num]} pm</p>
              <p>Empirical: {elementData.radius.empirical[num]} pm</p>
              <p>Covalent: {elementData.radius.covalent[num]} pm</p>
              <p>Van der Waals: {elementData.radius.vanderwaals[num]} pm</p>
            </div>
          </DetailCard>
          <DetailCard>
            <Abundance num={num} />
          </DetailCard>
          <DetailCard>
            {this.formatIonizationEnergies(num)}
          </DetailCard>
          <DetailCard>
            <p>Valence: {elementData.valence[num]}</p>
          </DetailCard>
          </ElementDetails>
          <ElementCard color={category_color[elementData.category[num]]}>
            <CardText size={28}>{elementData.name[num]}</CardText>
            <CardText size={95}>{elementData.symbol[num]}</CardText>
            <CardText>{elementData.mass[num]}</CardText>
          </ElementCard>
          <ElementDetails>
          <strong>Density</strong>
          <div style={{"margin-left": "2em"}}>
            <p>STP: {elementData.density.stp[num]} kg/m<sup>3</sup></p>
            <p>Liquid: {elementData.density.liquid[num]} kg/m<sup>3</sup></p>
          </div>
          <strong>Hardness</strong>
          <div style={{"margin-left": "2em"}}>
            <p>Brinell: {elementData.hardness.brinell[num]} Mpa</p>
            <p>Mohs: {elementData.hardness.mohs[num]}</p>
            <p>Vickers: {elementData.hardness.vickers[num]} Mpa</p>
          </div>
          <strong>Modulus</strong>
          <div style={{"margin-left": "2em"}}>
            <p>Bulk: {elementData.modulus.bulk[num]} GPa</p>
            <p>Shear: {elementData.modulus.shear[num]} GPa</p>
            <p>Young: {elementData.modulus.young[num]} GPa</p>
          </div>
          <strong>Conductivity</strong>
          <div style={{"margin-left": "2em"}}>
            <p>Thermal: {elementData.conductivity.thermal[num]} W/mK</p>
            <p>Electric: {elementData.conductivity.electric[num]} MS/m</p>
          </div>
          <p>Melting Point: {elementData.melt[num]} K</p>
          <p>Boiling Point: {elementData.boil[num]} K</p>
        </ElementDetails>
      </ElementPage>
    );
  }
}

export default Element;
