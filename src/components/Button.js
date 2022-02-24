import { View, Text, TouchableOpacity, Platform } from 'react-native';
import React from 'react';
import Colors from '../../colors';

const Button = ({ title, onPress, loading = false, style, styleTxt }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: '90%',
        backgroundColor: loading ? Colors.grey : Colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: Platform.constants.systemName == 'iOS' ? 18 : 12,
        padding: Platform.constants.systemName == 'iOS' ? 14 : 10,
        borderRadius: 8,
        ...style,
      }}
    >
      <Text
        style={{
          color: loading ? Colors.white : Colors.scondary,
          fontWeight: 'bold',
          fontSize: Platform.constants.systemName == 'iOS' ? 18 : 14,
          ...styleTxt,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
