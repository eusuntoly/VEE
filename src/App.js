import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Iframe from 'react-iframe';

import { simpleAction } from './actions/simpleAction'

/* 
 * mapDispatchToProps
*/
const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
})

/* 
 * mapStateToProps
*/
const mapStateToProps = state => ({
  ...state
})

/**
 * @class App
 * @extends {Component}
 */
class App extends Component {
  
  simpleAction = (event) => {
    this.props.simpleAction();
  }
  
  displayIframeContent(){
    var iFrame = document.getElementById("myIframe");
    var iFrameDocument = iFrame.contentDocument || iFrame.contentWindow.document;
    console.log(iFrameDocument);
  }

  render() {
    return (
      <React.Fragment>
        <Iframe
        id="myIframe"
        src="http://localhost:55999/"
        width="500px"
        height="600px">
        </Iframe>
        <button onClick={this.displayIframeContent}> Press</button>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);