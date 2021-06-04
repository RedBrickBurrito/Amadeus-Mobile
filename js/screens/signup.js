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
import { signUp } from '../services/user';

const useInputState = (initialValue = '#E5383B') => {
  const [value, setValue] = React.useState(initialValue);
  return { value, onChangeText: setValue };
};

function Signup() {
  const basicInputState = useInputState();
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [psswd, setpsswd] = useState('');
  const history = useHistory();

  const createAlert = (data) =>
    Alert.alert(data.title, data.message, [
      {
        text: 'OK',
        onPress: () => {
          if (data.title == 'Success') {
            history.push('/login');
          }
        },
      },
    ]);

  const handleSubmit = () => {
    const validated = validate();

    if (validated) {
      const data = { email: email, password: psswd };

      signUp(data)
        .then((responseData) => {
          createAlert({
            title: 'Success',
            message: responseData.message,
          });
        })
        .catch((responseData) => {
          createAlert({
            title: 'Error',
            message: responseData.message,
          });
        });
    }
  };

  const handleChangeText = (value, type) => {
    if (type == 'psswd') {
      setpsswd(value);
    }

    if (type == 'email') {
      setemail(value);
    }

    if (type == 'name') {
      setname(value);
    }
  };

  const validate = () => {
    let validated = true;

    if (email.length < 1) {
      validated = false;
    }

    if (psswd.length < 1) {
      validated = false;
    }
    return validated;
  };

  const handleBack = () => {
    console.log('clicked back');

    history.goBack();
  };

  const handleLoginPress = () => {
    console.log('clicked login');

    history.push('/login');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView>
          <ScrollView>
            <View style={styles.container}>
              <Text style={styles.backbutton} onPress={() => handleBack()}>
                ᐸ
              </Text>
              <Text style={styles.title}>Sign Up</Text>
              <Text style={styles.name}>Name</Text>
              <View>
                <TextInput
                  style={styles.input}
                  value={name}
                  onChangeText={(value) => handleChangeText(value, 'name')}
                />
              </View>
              <Text style={styles.email}>E-mail</Text>
              <View>
                <TextInput
                  style={styles.input}
                  value={email}
                  onChangeText={(value) => handleChangeText(value, 'email')}
                />
              </View>
              <Text style={styles.password}>Password</Text>
              <View>
                <TextInput
                  secureTextEntry
                  style={styles.input}
                  value={psswd}
                  onChangeText={(value) => handleChangeText(value, 'psswd')}
                />
              </View>
              <Button
                style={styles.button}
                status="primary"
                appearance="outline"
                activeOpacity={0.2}
                onPress={() => handleSubmit()}
              >
                {(evaProps) => (
                  <Text {...evaProps} style={styles.submit}>
                    Submit
                  </Text>
                )}
              </Button>
              <Text style={styles.footer}>
                <Text style={styles.footertext}>Already an user?</Text>
                <Text
                  style={styles.footerbutton}
                  onPress={() => handleLoginPress()}
                >
                  {' '}
                  Log in
                </Text>
              </Text>
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
  },
  backbutton: {
    fontFamily: 'Montserrat-Regular',
    fontWeight: 'bold',
    fontSize: 32,
    color: '#F5F3F4',
    //marginTop: '1%'
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontWeight: 'bold',
    fontSize: 64,
    color: '#E5383B',
    marginTop: '10%',
  },
  name: {
    fontFamily: 'Montserrat-Regular',
    fontWeight: 'normal',
    fontSize: 18,
    color: '#F5F3F4',
    marginTop: '10%',
  },
  input: {
    marginTop: '1%',
    marginBottom: '10%',
    borderBottomWidth: 1,
    borderBottomColor: '#F5F3F4',
    textDecorationColor: '#F5F3F4',
    color: '#F5F3F4',
  },
  email: {
    fontFamily: 'Montserrat-Regular',
    fontWeight: 'normal',
    fontSize: 18,
    color: '#F5F3F4',
    marginTop: '10%',
  },
  password: {
    fontFamily: 'Montserrat-Regular',
    fontWeight: 'normal',
    fontSize: 18,
    color: '#F5F3F4',
    marginTop: '10%',
  },
  button: {
    margin: 20,
    backgroundColor: '#0B090A',
    borderColor: '#E5383B',
    borderRadius: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  submit: {
    color: '#E5383B',
    fontSize: 24,
  },
  footertext: {
    fontFamily: 'Montserrat-Regular',
    fontWeight: 'normal',
    fontSize: 18,
    color: '#F5F3F4',
    marginLeft: '12%',
    //marginTop: '10%',
  },
  footerbutton: {
    fontFamily: 'Montserrat-Regular',
    fontWeight: 'normal',
    fontSize: 18,
    color: '#E5383B',
    //marginLeft:'8%'
  },
  footer: {
    marginLeft: '14%',
    marginBottom: '5%',
  },
});

export default Signup;
