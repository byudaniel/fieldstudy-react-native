
import React from 'react';
import { View } from 'react-native';
import { PageHeader } from '../components';
import Questions from './Questions';

export default function Editor() {
  const questions = [
    {
      id: 1,
      label: 'Test',
      type: 'text'
    },
    {
      id: 2,
      label: 'Test2',
      type: 'range'
    }
  ];

  return (
    <View>
      <PageHeader>Editor</PageHeader>
      <Questions questions={questions} />
    </View>
  );
}
