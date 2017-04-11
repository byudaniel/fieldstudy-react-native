
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
    }
  ];

  return (
    <View>
      <PageHeader>Editor</PageHeader>
      <Questions questions={questions} />
    </View>
  );
}
