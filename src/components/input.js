import React from 'react';
import {
  Dimensions,
  TextInput,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import Colors from '../../colors';
const { width, height } = Dimensions.get('window');
import { Feather } from '@expo/vector-icons';
export default function Input({
  //props
  title, //for placeholder in input
  styleInput, //for style of input
  stylesView, //for style of view contain input
  onPress, //for onpress on icon
  color = '#000',
  type = 'default', //function to change keyboard
  onChangeText = (value) => {}, //function when change text
  secureTextEntry = false, //true to hiden password
  value,
  autoFocus = false,
  autoCapitalize = 'none',
  password = false,
}) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.Os == 'ios' ? 'padding' : 'height'}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.white,
        borderColor: Colors.grey,
        marginHorizontal: 20,
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 15,
        ...stylesView,
      }}
    >
      <TextInput
        style={{
          textAlign: 'left',
          width: password ? width * 0.75 : width * 0.82,
          paddingVertical: 15,
          // backgroundColor: 'black',
          //   fontWeight: 'bold',
          color: color,
          ...styleInput,
        }}
        value={value}
        placeholderTextColor={Colors.scondary}
        placeholder={title}
        onChangeText={(value) => onChangeText(value)}
        underlineColorAndroid='transparent'
        keyboardType={type} //numeric
        secureTextEntry={secureTextEntry}
        autoFocus={autoFocus}
        autoCapitalize={autoCapitalize}
      />
      {password ? (
        secureTextEntry ? (
          <Feather name='eye-off' size={22} color='black' onPress={onPress} />
        ) : (
          <Feather name='eye' size={22} color='black' onPress={onPress} />
        )
      ) : null}
    </KeyboardAvoidingView>
  );
}
