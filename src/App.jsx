import React, { Component } from 'react';
import Element from './Element';

let xDown = null;
let yDown = null;

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {element: 1};
  }

  nextElement() {
    if (this.state.element < 118 ) {
      this.setState({element: this.state.element + 1});
    }
  }

  previousElement() {
    if (this.state.element > 1) {
      this.setState({element: this.state.element - 1});
    }
  }

  handleKeyPress(event) {
    if (event.code === 'ArrowLeft') {
      this.previousElement();
    } else if (event.code === 'ArrowRight') {
      this.nextElement();
    }
  }

  handleTouchStart(evt) {
    xDown = evt.touches[0].clientX;
    yDown = evt.touches[0].clientY;
  };

  handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
      return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
      if ( xDiff > 0 ) {
        this.nextElement();
      } else {
        this.previousElement();
      }
    }
    /* reset values */
    xDown = null;
    yDown = null;
  };

  componentDidMount() {
    window.addEventListener('touchstart', this.handleTouchStart.bind(this), false);
    window.addEventListener('touchmove', this.handleTouchMove.bind(this), false);

    window.addEventListener("keydown", this.handleKeyPress.bind(this), false);
  }

  componentWillUnmount() {
    window.removeEventListener('touchstart', this.handleTouchStart.bind(this), false);
    window.removeEventListener('touchmove', this.handleTouchMove.bind(this), false);

    window.removeEventListener("keydown", this.handleKeyPress.bind(this), false);
  }

  render() {
    return (
      <div style={{"max-width": 1024, "max-height": 800, "margin": "0 auto"}}>
        <Element num={this.state.element} />
      </div>
    );
  }
}

export default App;
