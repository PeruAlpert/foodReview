import { View, Text, Image, Animated, Easing, Platform } from 'react-native';
import React, { useEffect, useState } from 'react';
import Colors from '../../colors';
import { FontAwesome, Entypo } from '@expo/vector-icons';
//hideLogo cuz in xd page no logo
const HeaderDetails = ({ title, price, star, time }) => {
  return (
    <View style={{ margin: 30, marginBottom: 10 }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Text style={{ fontSize: 16 }}>{title}</Text>
        <Text style={{ color: 'orange', fontSize: 15, fontWeight: 'bold' }}>
          $ {price}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          justifyContent: 'space-between',
        }}
      >
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
          }}
        >
          <Entypo name='star' size={12} color='orange' />
          <Entypo name='star' size={12} color='orange' />
          <Entypo name='star' size={12} color='orange' />
          <Entypo name='star' size={12} color='orange' />
          <Entypo name='star-outlined' size={12} color='black' />
          <Text style={{ fontSize: 12, opacity: 0.2 }}>({star})</Text>
        </View>

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
          }}
        >
          <FontAwesome name='send' size={12} color='black' />
          <Text style={{ fontSize: 12, opacity: 0.7, left: 2 }}>
            {time} Minutes Free Shipping
          </Text>
        </View>
      </View>
    </View>
  );
};

export default HeaderDetails;
