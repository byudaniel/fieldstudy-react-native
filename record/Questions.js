
import React from 'react';
import { View } from 'react-native';
import Question from './Question';

export default function Questions(props) {
  const questions = props.questions || [];
  const responses = props.responses || {};

  return (
    <View>
      {questions.map(q => <Question key={q.id} schema={q} data={responses[q]} />)}
    </View>
  );
}