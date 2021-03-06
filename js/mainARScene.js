"use strict";

import React, { Component } from "react";

import { StyleSheet } from "react-native";

import { ViroARScene, Viro3DObject, ViroAmbientLight } from "react-viro";

export class HelloWorldSceneAR extends Component {
  constructor() {
    super();

    // Set initial state here
    this.state = {
      text: "Initializing AR...",
    };
  }

  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized}>
        <ViroAmbientLight color={"#aaaaaa"} />
        <Viro3DObject
          source={require("./res/scene.gltf")}
          resources={[
            require("./res/scene.bin"),
            require("./res/textures/Material_-_Base_baseColor.png"),
            require("./res/textures/Material_-_Rostro_baseColor.png"),
          ]}
          position={[0.1, 0, -0.3]}
          scale={[0.2, 0.2, 0.2]}
          animation={{ name: "Pose 1", run: true, loop: true, delay: 1000 }}
          type="GLTF"
        />
      </ViroARScene>
    );
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
