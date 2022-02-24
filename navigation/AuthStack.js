import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../src/containers/Login/login';

const Auth = createStackNavigator();

const AuthStack = () => {
  return (
    <Auth.Navigator
      initialRouteName='Login'
      screenOptions={{ headerShown: false }}
    >
      <Auth.Screen name='Login' component={LoginScreen} />
    </Auth.Navigator>
  );
};

export default AuthStack;
