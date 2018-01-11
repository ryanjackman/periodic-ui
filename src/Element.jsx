import React, { Component } from 'react';
import elementData from './moredata.json';
import styled from 'styled-components';
import ordinal from 'ordinal';

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
  float: left;
  width: 50%;
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

  formatAbundances(num) {
    return (
      <div>
        <strong>Abundance</strong>
        <div style={{"margin-left": "2em"}}>
          <p>Universe: {elementData.abundance.universe[num]}%</p>
          <p>Solar System: {elementData.abundance.solar[num]}%</p>
          <p>Meteor: {elementData.abundance.meteor[num]}%</p>
          <p>Crust: {elementData.abundance.crust[num]}%</p>
          <p>Ocean: {elementData.abundance.ocean[num]}%</p>
          <p>Human: {elementData.abundance.human[num]}%</p>
        </div>
      </div>
    );
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
        <ElementCard color={category_color[elementData.category[num]]}>
          <CardText size={28}>{elementData.name[num]}</CardText>
          <CardText size={95}>{elementData.symbol[num]}</CardText>
          <CardText>{elementData.mass[num]}</CardText>
        </ElementCard>
        <ElementDetails>
          <p>Category: {category_name[elementData.category[num]]}</p>
          <p>Electronegativity: {elementData.electroneg[num]}</p>
          {this.formatDiscoveryYear(num)}
          <p>Electron Affinity: {elementData.affinity[num]} kJ/mol</p>
          <strong>Heat</strong>
          <div style={{"margin-left": "2em"}}>
            <p>Specific: {elementData.heat.specific[num]} J/kg/K</p>
            <p>Vaporization: {elementData.heat.vaporization[num]} kJ/mol</p>
            <p>Fusion: {elementData.heat.fusion[num]} kJ/mol</p>
          </div>
          <strong>Radius</strong>
          <div style={{"margin-left": "2em"}}>
            <p>Calculated: {elementData.radius.calculated[num]} pm</p>
            <p>Empirical: {elementData.radius.empirical[num]} pm</p>
            <p>Covalent: {elementData.radius.covalent[num]} pm</p>
            <p>Van der Waals: {elementData.radius.vanderwaals[num]} pm</p>
          </div>
          {this.formatAbundances(num)}
          {this.formatIonizationEnergies(num)}
          <p>Valence: {elementData.valence[num]}</p>
          </ElementDetails>
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
        <div />
      </ElementPage>
    );
  }
}

export default Element;
