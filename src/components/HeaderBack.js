import { View, Text, Image, Animated, Easing, Platform } from 'react-native';
import React, { useEffect, useState } from 'react';
import Colors from '../../colors';
import { Ionicons, Entypo } from '@expo/vector-icons';
//hideLogo cuz in xd page no logo
const HeaderBack = ({ title, subHeader, hideLogo = false }) => {
  useEffect(() => {
    Animated.timing(down, {
      toValue: 0,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, []);

  const [down, setdown] = useState(new Animated.Value(-100));

  return (
    <Animated.View
      style={{
        transform: [{ translateY: down }],
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: Platform.constants.systemName == 'iOS' ? 50 : 30,
        marginHorizontal: 20,
      }}
    >
      <Ionicons
        name='arrow-back'
        size={24}
        color={Colors.white}
        style={{ flex: 1 }}
      />
      <Text
        style={{
          flex: 1,
          color: Colors.white,
          fontWeight: 'bold',
          fontSize: 15,
        }}
      >
        {title}
      </Text>
      <Entypo name='bell' size={24} color={Colors.white} />
    </Animated.View>
  );
};

export default HeaderBack;
