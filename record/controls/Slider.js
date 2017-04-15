
import React from 'react';
import { Slider as SliderNative, Text, View } from 'react-native';

export default function Slider(props) {
  const schema = props.schema || {};

  return (
    <View>
      <Text>{schema.label}</Text>
      <SliderNative />
    </View>
  );
}
