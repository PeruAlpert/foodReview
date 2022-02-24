import {
  View,
  Text,
  Platform,
  ScrollView,
  Animated,
  Easing,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Input from '../../components/input';
import HeaderAuth from '../../components/HeaderAuth';
import Button from '../../components/Button';
import ButtonSocial from '../../components/ButtonSocial';
import Colors from '../../../colors';
import LoginAction from '../../../store/actions/login/login';
import { compose } from 'redux';
import { connect } from 'react-redux';
const loginPage = ({ LoginActionMethod, loginData }) => {
  //animated
  // console.log(loginData);
  useEffect(() => {
    Animated.timing(up, {
      toValue: 0,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, []);
  const [up, setup] = useState(new Animated.Value(100));

  //state
  const [securty, setsecurty] = useState(true);
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [loading, setLoading] = useState(false);
  const [valid, setvalid] = useState('');
  //send request login
  const login = () => {
    if (email != '' && pass != '') {
      // setLoading(true);
      LoginActionMethod({ email: email, password: pass }, (errors) => {
        // setLoading(false);
        setvalid(errors);
      });
    } else {
      setvalid('fill input');
      setLoading(false);
    }
  };

  return (
    <ScrollView
      style={{
        marginTop: Platform.constants.systemName == 'iOS' ? 50 : 30,
      }}
    >
      <HeaderAuth header='Login' subHeader=' Welcome to mac' />

      <Input
        value={email}
        title={'Your Email'}
        onChangeText={(v) => setEmail(v)}
      />
      <Input
        value={pass}
        onChangeText={(v) => setPass(v)}
        title={'Password'}
        password
        secureTextEntry={securty}
        onPress={() => setsecurty(!securty)}
      />
      {valid != '' && (
        <Text
          style={{ color: Colors.error, textAlign: 'center', marginTop: 10 }}
        >
          {valid}
        </Text>
      )}

      <Animated.View
        style={{
          transform: [{ translateY: up }],
        }}
      >
        <Button title={'Login'} loading={loading} onPress={login} />
        <Text style={{ textAlign: 'center', color: Colors.scondary }}>
          Forgot your password?
        </Text>
        <Text
          style={{ textAlign: 'center', color: Colors.grey, marginTop: 18 }}
        >
          Or Login With
        </Text>

        {/* social buttons */}
        <ButtonSocial
          title={'Login with Facebook'}
          faceBook
          color={'#367FC0'}
        />

        <ButtonSocial title={'Login with Apple'} apple />

        <Text
          style={{
            color: Colors.grey,
            textAlign: 'center',
            marginVertical: 18,
          }}
        >
          Don't have an Account?{' '}
          <Text style={{ color: Colors.scondary }}>Sign Up</Text>
        </Text>

        <Text style={{ textAlign: 'center', marginHorizontal: 20 }}>
          By proceeding, you agree to our Terms of Use and confirm you have read
          our Privacy and Cookie Statement.
        </Text>
      </Animated.View>
    </ScrollView>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    LoginActionMethod: (user, callback) => {
      dispatch(LoginAction(user, callback));
    },
  };
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
    loginData: state.login,
  };
};
export default compose(connect(mapStateToProps, mapDispatchToProps))(loginPage);
