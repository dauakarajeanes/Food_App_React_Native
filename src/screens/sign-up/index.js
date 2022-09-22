import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import BigBtn from '../../components/big-btn';
import BigTextInput from '../../components/big-text-input';
import ScreenDefault from '../../components/screen-wrapper';
import Loader from '../../components/loader';

import stylesMain from '../../styles';
import styles from './styles';
import { authSignUp, newClientSalt } from '../../utils/authentication';

const bcrypt = require('bcryptjs');

const SignUpScreen = function SignUpScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password1, setPassword1] = useState('');

  const [emailText, setEmailText] = useState('');
  const [passwordText, setPasswordText] = useState('');

  const [loading, setLoading] = useState(false);

  const resetCheckSignUp = () => {
    setPasswordText('');
    setEmailText('');
  };

  const resetSignUp = () => {
    setEmail('');
    setPassword('');
    setPassword1('');
  };

  const setRed = (field) => {
    let returnStyle = {};

    if (field === 'email' && emailText !== '') {
      returnStyle = { borderColor: 'red' };
    } else if (field === 'password' && passwordText !== '') {
      returnStyle = { borderColor: 'red' };
    }

    return returnStyle;
  };

  const handleSignUp = async () => {
    setLoading(true);

    const salt = await newClientSalt(email);

    const passwordHash = bcrypt.hashSync(password, salt);
    const passwordHash1 = bcrypt.hashSync(password1, salt);

    const authResult = await authSignUp(email, passwordHash, passwordHash1, salt);

    if (authResult.result) {
      resetSignUp();

      navigation.pop(1);
    } else {
      const { type, value } = authResult.message;

      if (type === 'email') {
        setEmailText(value);
      } else if (type === 'password') {
        setPasswordText(value);
      }
    }

    setLoading(false);
  };

  return (
    <ScreenDefault>
      <Loader style={!loading ? stylesMain.hidden : {}} />

      <View style={stylesMain.banner}>
        <Text style={[stylesMain.text, styles.titleText]}>Create Account</Text>
      </View>

      <View style={styles.loginContainer}>
        <BigTextInput
          style={setRed('email')}
          placeholder="Email"
          autoComplete="email"
          keyboardType="email-address"
          textContentType="emailAddress"
          value={email}
          onChangeText={(emailValue) => {
            setEmail(emailValue);
            resetCheckSignUp();
          }}
        />

        <View style={stylesMain.notification}>
          <Text style={stylesMain.notificationText}>{ emailText }</Text>
        </View>

        <BigTextInput
          style={[setRed('password'), { marginBottom: 25 }]}
          placeholder="Password"
          autoComplete="password"
          textContentType="newPassword"
          secureTextEntry
          value={password}
          onChangeText={(passwordValue) => {
            setPassword(passwordValue);
            resetCheckSignUp();
          }}
          onEndEditing={(event) => {
            if (event.nativeEvent.text.length === 0) {
              setPassword('');
              setPassword1('');
            }
          }}
        />

        <BigTextInput
          style={setRed('password')}
          placeholder="Password"
          autoComplete="password"
          textContentType="newPassword"
          secureTextEntry
          value={password1}
          onChangeText={(passwordValue) => {
            setPassword1(passwordValue);
            resetCheckSignUp();
          }}
          onEndEditing={(event) => {
            if (event.nativeEvent.text.length === 0) {
              setPassword('');
              setPassword1('');
            }
          }}
        />

        <View style={stylesMain.notification}>
          <Text style={stylesMain.notificationText}>{ passwordText }</Text>
        </View>

        <BigBtn
          title="SIGN UP"
          onPress={() => {
            handleSignUp();
          }}
        />

        <View style={stylesMain.flex}>
          <Text style={stylesMain.text}>Already a user? </Text>
          <TouchableOpacity
            onPress={() => navigation.pop(1)}
          >
            <Text style={stylesMain.link}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenDefault>
  );
};

SignUpScreen.propTypes = {
  navigation: PropTypes.shape({
    pop: PropTypes.func.isRequired,
  }).isRequired,
};

export default SignUpScreen;
