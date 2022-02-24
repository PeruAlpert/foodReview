import { View, Text, Image, Animated, Easing } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import Colors from '../../colors';
//hideLogo cuz in xd page no logo
const HeaderAuth = ({ header, subHeader, hideLogo = false }) => {
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
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'flex-end',
          marginHorizontal: 20,
          alignItems: 'center',
        }}
      >
        <View
          style={{
            backgroundColor: '#E9D023',
            marginHorizontal: 15,
            borderRadius: 8,
            padding: 5,
          }}
        >
          <Ionicons name='call-sharp' size={23} color='black' />
        </View>
      </View>
      {hideLogo ? null : (
        <View>
          <Image
            source={require('../../assets/images/Logo.png')}
            style={{ alignSelf: 'center', height: 55, width: 60 }}
          />
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              fontWeight: 'bold',
              marginTop: 12,
              color: Colors.scondary,
            }}
          >
            {header}
          </Text>

          <Text
            style={{
              textAlign: 'center',
              fontSize: 15,
              color: Colors.grey,
              marginTop: 12,
            }}
          >
            {subHeader}
          </Text>
        </View>
      )}
    </Animated.View>
  );
};

export default HeaderAuth;
