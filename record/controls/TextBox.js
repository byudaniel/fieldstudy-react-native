
import React from 'react';
import { Text, TextInput, View } from 'react-native';

export default function TextBox(props) {
  const schema = props.schema || {};

  return (
    <View>
      <Text>{schema.label}</Text>
      <TextInput />
    </View>
  );
}
