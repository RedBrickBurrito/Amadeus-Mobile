"use strict";

import React, { Component } from "react";

import { StyleSheet } from "react-native";

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  Viro3DObject,
  ViroAmbientLight,
  ViroARCamera,
  ViroAnimatedImage,
  ViroImage,
  ViroVideo,
} from "react-viro";

export default class HelloWorldSceneAR extends Component {
  constructor() {
    super();

    // Set initial state here
    this.state = {
      text: "Initializing AR...",
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
  }

  render() {
    const { showArCameraView } = this.props;

    return (
      <ViroARScene onTrackingUpdated={this._onInitialized}>
        <ViroAmbientLight color={"#aaaaaa"} />

        <ViroARCamera>
          <ViroAnimatedImage
            height={2}
            width={1}
            placeholderSource={require("./res/background.gif")}
            source={require("./res/background.gif")}
            position={[0, 0, -1]}
          />
        

          <Viro3DObject
            source={require("./res/scene.gltf")}
            resources={[
              require("./res/scene.bin"),
              require("./res/textures/Material_-_Base_baseColor.png"),
              require("./res/textures/Material_-_Rostro_baseColor.png"),
            ]}
            position={[0, 0, -0.5]}
            scale={[0.3, 0.3, 0.3]}
            animation={{ name: "Pose 1", run: true, loop: true, delay: 1000 }}
            type="GLTF"
          />
        </ViroARCamera>
      </ViroARScene>
    );
  }

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text: "Hello World!",
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: "Arial",
    fontSize: 30,
    color: "#ffffff",
    textAlignVertical: "center",
    textAlign: "center",
  },
});

module.exports = HelloWorldSceneAR;
