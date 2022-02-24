import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../src/containers/Home';

const Home = createStackNavigator();

const TabStack = () => {
  return (
    <Home.Navigator
      initialRouteName='Home'
      screenOptions={{ headerShown: false }}
    >
      <Home.Screen name='Home' component={HomeScreen} />
    </Home.Navigator>
  );
};

export default TabStack;
