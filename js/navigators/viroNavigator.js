/**
 * Copyright (c) 2017-present, Viro, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TouchableHighlight,
  SafeAreaView,
  Alert,
} from "react-native";
import {
  ApplicationProvider,
  Text,
  Button,
  Input,
} from "@ui-kitten/components";
import { sendMessage } from "../services/sendMessageService";
import { ViroARSceneNavigator } from "react-viro";
import ToggleSwitch from "toggle-switch-react-native";
import * as eva from "@eva-design/eva";
/*
 TODO: Insert your API key below
 */
var sharedProps = {
  apiKey: "API_KEY_HERE",
};

// Sets the default scene you want for AR and VR
var InitialARScene = require("../mainARScene");
var SecondaryARScene = require("../HelloWorldSceneAR");

var UNSET = "UNSET";
var AR_NAVIGATOR_TYPE2 = "AR2";
var AR_NAVIGATOR_TYPE = "AR";

// This determines which type of experience to launch in, or UNSET, if the user should
// be presented with a choice of AR or VR. By default, we offer the user a choice.
var defaultNavigatorType = UNSET;

export function sendMessageToBeDisplayed(state) {
  const newState = { ...state, newText: text };
  return newState;
}

class App extends Component {
  constructor() {
    super();

    this.state = {
      value: "",
    };

    this.handleSendMessage = this.handleSendMessage.bind(this);
  }

  handleSendMessage = (messageToSend) => {
    {
      sendMessage(messageToSend)
        .then((responseData) => {
          Alert.alert("Amadeus says:", responseData.data, [{ text: "Close" }], {
            cancelable: true,
          });
        })
        .catch((responseData) => {
          Alert.alert("Failure", responseData.data, [{ text: "Ok" }], {
            cancelable: true,
          });
        });
    }
  };
  render() {
    return (
      <>
        <Input
          placeholder="What are you thinking?"
          onChangeText={(nextValue) => this.setState({ value: nextValue })}
          value={this.state.value}
          status="danger"
          style={localStyles.textInput}
        />
        <Button
          size="small"
          style={localStyles.sendButton}
          status="danger"
          onPress={() => this.handleSendMessage(this.state.value)}
          onPressOut={() => this.setState({ value: "" })}
        >
          Send
        </Button>
      </>
    );
  }
}

export class ViroSample extends Component {
  constructor() {
    super();

    this.state = {
      navigatorType: defaultNavigatorType,
      sharedProps: sharedProps,
    };
    this._getExperienceSelector = this._getExperienceSelector.bind(this);
    this._getARNavigator = this._getARNavigator.bind(this);
    //this._getVRNavigator = this._getVRNavigator.bind(this);
    this._getExperienceButtonOnPress =
      this._getExperienceButtonOnPress.bind(this);
    this._exitViro = this._exitViro.bind(this);
  }

  // Replace this function with the contents of _getVRNavigator() or _getARNavigator()
  // if you are building a specific type of experience.
  render() {
    if (this.state.navigatorType == UNSET) {
      return this._getExperienceSelector();
    } else if (this.state.navigatorType == AR_NAVIGATOR_TYPE2) {
      return this._getARNavigator2();
    } else if (this.state.navigatorType == AR_NAVIGATOR_TYPE) {
      return this._getARNavigator();
    }
  }

  // Presents the user with a choice of an AR or VR experience
  _getExperienceSelector() {
    return (
      <>
        <ApplicationProvider {...eva} theme={eva.dark}>
          <View style={localStyles.outer}>
            <View style={localStyles.inner}>
              <Text style={localStyles.titleText}>
                Choose your desired experience:
              </Text>

              <TouchableHighlight
                style={localStyles.buttons}
                onPress={this._getExperienceButtonOnPress(AR_NAVIGATOR_TYPE)}
                underlayColor={"#68a0ff"}
              >
                <Text style={localStyles.buttonText}>AR</Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={localStyles.buttons}
                onPress={this._getExperienceButtonOnPress(AR_NAVIGATOR_TYPE2)}
                underlayColor={"#68a0ff"}
              >
                <Text style={localStyles.buttonText}>NO-AR</Text>
              </TouchableHighlight>
            </View>
          </View>
        </ApplicationProvider>
      </>
    );
  }

  // Returns the ViroARSceneNavigator which will start the AR experience
  _getARNavigator() {
    return (
      <ApplicationProvider {...eva} theme={eva.dark}>
        <SafeAreaView style={{ flex: 1, bottom: 0 }}>
          <View
            style={{
              alignSelf: "flex-end",
              flexDirection: "row",
              backgroundColor: "black",
              height: "7%",
              marginTop: 10,
            }}
          >
            <ToggleSwitch
              isOn={false}
              onColor="green"
              offColor="grey"
              label="Turn off AR"
              labelStyle={{
                color: "white",
                fontWeight: "900",
                right: 90,
                top: 20,
              }}
              size="medium"
              onToggle={(isOn) => console.log("changed to : ", isOn)}
              style={{ marginTop: 10, left: 30 }}
            />
          </View>
          <ViroARSceneNavigator
            {...this.state.sharedProps}
            initialScene={{ scene: InitialARScene }}
          />
          <App />
        </SafeAreaView>
      </ApplicationProvider>
    );
  }

  // Returns the ViroSceneNavigator which will start the VR experience
  _getARNavigator2() {
    return (
      <ApplicationProvider {...eva} theme={eva.dark}>
        <SafeAreaView style={{ flex: 1, bottom: 0 }}>
          <View
            style={{
              alignSelf: "flex-end",
              flexDirection: "row",
              backgroundColor: "black",
              height: "7%",
              marginTop: 10,
            }}
          >
            <ToggleSwitch
              isOn={false}
              onColor="green"
              offColor="grey"
              label="Turn on AR"
              labelStyle={{
                color: "white",
                fontWeight: "900",
                right: 90,
                top: 20,
              }}
              size="medium"
              onToggle={(isOn) => console.log("changed to : ", isOn)}
              style={{ marginTop: 10, left: 30 }}
            />
          </View>
          <ViroARSceneNavigator
            {...this.state.sharedProps}
            initialScene={{ scene: SecondaryARScene }}
          />
          <App />
        </SafeAreaView>
      </ApplicationProvider>
    );
  }

  // This function returns an anonymous/lambda function to be used
  // by the experience selector buttons
  _getExperienceButtonOnPress(navigatorType) {
    return () => {
      this.setState({
        navigatorType: navigatorType,
      });
    };
  }

  // This function "exits" Viro by setting the navigatorType to UNSET.
  _exitViro() {
    this.setState({
      navigatorType: UNSET,
    });
  }
}

var localStyles = StyleSheet.create({
  viroContainer: {
    flex: 1,
    backgroundColor: "black",
  },
  outer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "black",
  },
  inner: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "black",
  },
  titleText: {
    paddingTop: 30,
    paddingBottom: 20,
    color: "#fff",
    textAlign: "center",
    fontSize: 25,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
  },
  buttons: {
    height: 80,
    width: 150,
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#68a0cf",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
  },
  exitButton: {
    height: 50,
    width: 100,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#68a0cf",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
  },
  textInput: {
    backgroundColor: "black",
    alignSelf: "flex-start",
    width: "80%",
    borderRadius: 20,
    paddingLeft: 15,
    height: "8%",
    bottom: -14,
  },
  sendButton: {
    alignItems: "center",
    padding: 10,
    bottom: 54,
    left: 340,
    width: "16%",
    height: "5%",
  },
});

module.exports = ViroSample;
