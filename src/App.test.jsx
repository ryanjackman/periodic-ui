import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TestUtils from 'react-dom/test-utils';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('works for all keycodes', () => {
  //let doc = TestUtils.renderIntoDocument((<div><App/></div>));
  //const div = document.createElement('div');
  ReactDOM.render(<App />, document.body);
  //document.body.appendChild(div);

  //console.log(document.body.firstChild);

  let range = (a, b) => {
    return Array.from(new Array(b-a+1), (x,i) => i + a);
  };

  //const myNode = ReactDOM.findDOMNode(doc.childNodes[0]);
  //console.log(myNode);


  range(32, 90).forEach( (i) => {
    TestUtils.Simulate.keyDown(document.body, {keyCode : i});
  });

});
