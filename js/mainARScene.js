'use strict';

import React, { Component, useContext } from 'react';

import {StyleSheet, TextInput, View} from 'react-native';
import { connect } from 'react-redux';
import { changeText } from '../actions/textChanged';
import { bindActionCreators} from 'redux';
import { ReactReduxContext } from 'react-redux';

import {
  ViroARScene,
  Viro3DObject,
  ViroAmbientLight,
  ViroARPlaneSelector,
  ViroText,
  VRTTEX
} from 'react-viro';

export class HelloWorldSceneAR extends Component {
  constructor() {
    super();

    // Set initial state here
    this.state = {
      text : "Initializing AR...",
      textChanged: "Hello",
    };

    this.updateTextResponse = this.updateTextResponse.bind(this);

  }

  updateTextResponse = () => {
    const {store} = useContext(ReactReduxContext);
    this.setState({textChanged: store.getState()})

  }

  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized} >
        <ViroAmbientLight color={"#aaaaaa"} />
        <ViroText
    text={this.state.textChanged}
    textAlign="left"
    textAlignVertical="top"
    textClipMode="clipToBounds"
    color="#000000"
    width={2} height={2}
    style={{fontFamily:"Arial", fontSize:20, color:"#0000FF"}}
    position={[0,0,-5]}
 />
        <Viro3DObject
            source={require('./res/scene.gltf')}
            resources={[require('./res/scene.bin'),
                        require('./res/textures/Material_-_Base_baseColor.png'),
                        require('./res/textures/Material_-_Rostro_baseColor.png')]}
            position={[0.1, 0, -0.3]}
            scale={[.2, .2, .2]}
            animation={{name:'Pose 1',
          run:true,
        loop:true,
      delay:1000}}
            type="GLTF" />
      </ViroARScene>
    );
  }

}

const mapStateToProps = state => ({
  text: state.text,
});

const ActionCreators = Object.assign(
  {},
  changeText,
);
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',  
  },
});

module.exports = HelloWorldSceneAR;
export default connect(mapStateToProps, mapDispatchToProps)(HelloWorldSceneAR);
