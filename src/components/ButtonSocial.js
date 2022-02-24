import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Colors from '../../colors';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
const Button = ({
  title,
  onPress,
  loading = false,
  faceBook = false,
  gmail = false,
  apple = false,
  color = 'black',
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: '90%',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: color,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 18,
        padding: 14,
        borderRadius: 8,
        flexDirection: 'row',
      }}
    >
      <View style={{ marginHorizontal: 18 }}>
        {faceBook && (
          <FontAwesome name='facebook-square' size={22} color={color} />
        )}
        {gmail && <AntDesign name='google' size={22} color={color} />}

        {apple && <AntDesign name='apple1' size={22} color={color} />}
      </View>
      <Text
        style={{
          color: color,
          fontSize: 15,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
