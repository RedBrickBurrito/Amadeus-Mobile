import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableWithoutFeedback,
    Alert,
    SafeAreaView,
    TextInput,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    Keyboard,
  } from 'react-native';
  import { useHistory, Redirect } from 'react-router-native';
  import { Button, Input } from '@ui-kitten/components';

function Settings() {
    
    
    
    
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <TouchableWithoutFeedback nPress={Keyboard.dismiss}>
                <SafeAreaView>
                    <ScrollView>
                        <View style={styles.container}>
                            <Text style={styles.backbutton} onPress={() => handleBack()}>
                                ᐸ
                            </Text>
                            <Text style={styles.title}>Settings</Text>
                            <Text style={styles.changetext}>Change Mail</Text>
                            <View>
                                <TextInput style={styles.input}/>
                            </View>
                            <Button
                            style={styles.button}
                            status="primary"
                            appearance="outline"
                            activeOpacity={0.2}
                            >
                                {(evaProps) => (
                                    <Text {...evaProps} style={styles.changebutton}>
                                        Change
                                    </Text>
                                )}
                            </Button>
                            <Text style={styles.changetext}>Change Password</Text>
                            <View>
                                <TextInput style={styles.input}/>
                            </View>
                            <Button
                            style={styles.button}
                            status="primary"
                            appearance="outline"
                            activeOpacity={0.2}
                            >
                                {(evaProps) => (
                                    <Text {...evaProps} style={styles.changebutton}>
                                        Change
                                    </Text>
                                )}
                            </Button>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    ); 
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        paddingHorizontal: '10%',
        paddingTop: '10%',
        backgroundColor: '#161214',
        flex: 1,
        height: '100%',
    },
    title: {
      fontFamily: 'Montserrat-Bold',
      fontWeight: 'bold',
      fontSize: 64,
      color: '#E5383B',
      marginTop: '7%',
    },
    backbutton: {
        fontFamily: 'Montserrat-Regular',
        fontWeight: 'bold',
        fontSize: 32,
        color: '#F5F3F4',
        marginTop: '5%',
        //marginLeft: '10%'
      },
      changetext: {
        fontFamily: 'Montserrat-Regular',
        fontWeight: 'normal',
        fontSize: 18,
        color: '#F5F3F4',
        marginTop: '13%',
      },
      input: {
        marginTop: '1%',
        marginBottom: '10%',
        borderBottomWidth: 1,
        borderBottomColor: '#F5F3F4',
        textDecorationColor: '#F5F3F4',
        color: '#F5F3F4',
      },
      button: {
        margin: 20,
        backgroundColor: '#0B090A',
        borderColor: '#E5383B',
        borderRadius: 30,
        flexDirection: 'row',
        flexWrap: 'wrap',
      },
      changebutton: {
        color: '#E5383B',
        fontSize: 18,
      },
})

export default Settings;