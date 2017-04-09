/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
} from 'react-native';
import { RecordEditor } from './record';

export default function FieldStudy() {
  return (
    <View style={styles.container}>
      <RecordEditor />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('FieldStudy', () => FieldStudy);
