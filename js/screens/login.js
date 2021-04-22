import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet, TextInput, Text } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Button } from '@ui-kitten/components';

function Login() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Button appearance="ghost" style={styles.backButton}>
          <Text style={styles.backText}>Back</Text>
        </Button>
        <Text style={styles.title}>Log In</Text>
        <View style={styles.inputContainer}>
          <View style={styles.input}>
            <TextInput placeholder="E-mail" placeholderTextColor="#F5F3F4" />
          </View>
          <View style={styles.input}>
            <TextInput placeholder="Password" placeholderTextColor="#F5F3F4" />
          </View>
        </View>
        <Button appearance="outline" style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </Button>
        <View style={styles.footer}>
          <Text>
            <Text style={styles.footerText}>Don't have an account? </Text>
            <Text style={styles.footerButtonText}>Sign Up</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    paddingHorizontal: '10%',
    paddingTop: '10%',
    backgroundColor: '#161214',
    justifyContent: 'space-evenly',
  },
  title: {
    fontFamily: 'Monserrat-Regular',
    fontWeight: 'bold',
    fontSize: 64,
    color: '#E5383B',
    marginBottom: '25%',
  },
  inputContainer: {
    marginBottom: '25%',
  },
  input: {
    width: '95%',
    borderBottomColor: '#F5F3F4',
    borderBottomWidth: 1,
    marginBottom: '10%',
  },
  button: {
    borderRadius: 100,
    borderColor: '#E5383B',
    borderWidth: 3,
    height: '15%',
    backgroundColor: 'transparent',
  },
  buttonText: {
    fontSize: 24,
    fontFamily: 'Monserrat-Regular',
    fontWeight: 'bold',
    color: '#E5383B',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footerText: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Monserrat-Regular',
    color: '#F5F3F4',
    textAlignVertical: 'center',
  },
  footerButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Monserrat-Regular',
    color: '#E5383B',
  },
  backButton: {
    justifyContent: 'flex-start',
    height: '5%',
    width: '20%',
    paddingHorizontal: 0,
    marginHorizontal: -10,
  },
  backText: {
    color: '#F5F3F4',
  },
});

export default () => (
  <>
    <ApplicationProvider {...eva} theme={eva.dark}>
      <Login />
    </ApplicationProvider>
  </>
);
