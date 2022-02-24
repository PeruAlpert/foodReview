import React, { useEffect } from 'react';
import { Text, View, Button } from 'react-native'; //storage on phone
import { NavigationContainer } from '@react-navigation/native';
import TabStack from './TabStack'; //navigate to TabStack
import AuthStack from './AuthStack'; //navigate to TabStack
import { compose } from 'redux';
import { connect } from 'react-redux';
const Routes = ({ cart, loginData }) => {
  return (
    <NavigationContainer>
      {loginData ? <TabStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    loginData: state.login,
  };
};
export default compose(connect(mapStateToProps))(Routes);
