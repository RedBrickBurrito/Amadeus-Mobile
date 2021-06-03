import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  TextInput,
  Text,
  Alert,
} from "react-native";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, Button } from "@ui-kitten/components";
import { logIn } from "../services/user";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inputStatus, setInputStatus] = useState({
    email: true,
    password: true,
  });

  const createTwoButtonAlert = (data) =>
    Alert.alert(data.title, data.message, [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  const validate = () => {
    let validated = true;

    if (email.length < 1) {
      setInputStatus((prevState) => {
        return { ...prevState, email: false };
      });
      validated = false;
      console.log(inputStatus);
    } else {
      setInputStatus((prevState) => {
        return { ...prevState, email: true };
      });
    }

    if (password.length < 1) {
      setInputStatus((prevState) => {
        return { ...prevState, password: false };
      });
      console.log(inputStatus);
      validated = false;
    } else {
      setInputStatus((prevState) => {
        return { ...prevState, email: true };
      });
    }

    return validated;
  };

  const handleSubmit = () => {
    const validated = validate();

    if (validated) {
      const data = { email: email, password: password };

      logIn(data)
        .then((responseData) => {
          createTwoButtonAlert({
            title: "Success",
            message: responseData.message,
          });
        })
        .catch((responseData) => {
          createTwoButtonAlert({
            title: "Error",
            message: responseData.message,
          });
        });
    }
  };

  const handleChangeText = (value, type) => {
    if (type == "pwd") {
      setPassword(value);
    }

    if (type == "email") {
      setEmail(value);
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text
          style={styles.backText}
          onPress={() => console.log("pressed the back button")}
        >
          ᐸ
        </Text>
        <Text style={styles.title}>Log In</Text>
        <View style={styles.inputContainer}>
          <View style={inputStatus.email ? styles.input : styles.inputDanger}>
            <TextInput
              style={styles.textInput}
              placeholder="E-mail"
              placeholderTextColor="#F5F3F4"
              value={email}
              onChangeText={(value) => handleChangeText(value, "email")}
            />
          </View>
          <View style={inputStatus.email ? styles.input : styles.inputDanger}>
            <TextInput
              style={styles.textInput}
              secureTextEntry
              placeholder="Password"
              placeholderTextColor="#F5F3F4"
              value={password}
              onChangeText={(value) => handleChangeText(value, "pwd")}
            />
          </View>
        </View>
        <Button
          appearance="outline"
          style={styles.button}
          onPress={() => handleSubmit()}
          activeOpacity={0.2}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </Button>
        <View style={styles.footer}>
          <Text>
            <Text style={styles.footerText}>Don't have an account? </Text>
            <Text
              style={styles.footerButtonText}
              onPress={() => console.log("pressed the sign up button")}
            >
              Sign Up
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    paddingHorizontal: "10%",
    paddingTop: "10%",
    backgroundColor: "#161214",
    justifyContent: "space-evenly",
  },
  title: {
    fontFamily: "Monserrat-Bold",
    fontWeight: "bold",
    fontSize: 64,
    color: "#E5383B",
    marginBottom: "25%",
  },
  inputContainer: {
    marginBottom: "25%",
  },
  input: {
    width: "95%",
    borderBottomColor: "#F5F3F4",
    borderBottomWidth: 1,
    marginBottom: "10%",
  },
  inputDanger: {
    width: "95%",
    borderBottomColor: "red",
    borderBottomWidth: 1,
    marginBottom: "10%",
  },
  textInput: {
    color: "white",
  },
  button: {
    borderRadius: 100,
    borderColor: "#E5383B",
    borderWidth: 3,
    height: "15%",
    backgroundColor: "transparent",
  },
  buttonText: {
    fontSize: 24,
    fontFamily: "Monserrat-Regular",
    fontWeight: "bold",
    color: "#E5383B",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  footerText: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Monserrat-Regular",
    color: "#F5F3F4",
    textAlignVertical: "center",
  },
  footerButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Monserrat-Regular",
    color: "#E5383B",
  },
  backButton: {
    justifyContent: "flex-start",
    height: "5%",
    width: "20%",
    paddingHorizontal: 0,
    marginHorizontal: -10,
  },
  backText: {
    color: "#F5F3F4",
    fontSize: 32,
    fontWeight: "bold",
  },
});

export default () => (
  <>
    <ApplicationProvider {...eva} theme={eva.dark}>
      <Login />
    </ApplicationProvider>
  </>
);
