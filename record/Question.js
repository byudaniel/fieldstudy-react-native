
import React from 'react';
import { View } from 'react-native';
import { TextBox } from './controls';

const questionControlMap = {
  text: TextBox
};

export default function Question(props) {
  const schema = props.schema || {};
  const QuestionControl = questionControlMap[schema.type];

  if (!QuestionControl) {
    throw new Error(`Invalid question type: ${schema.type}`);
  }

  return (
    <QuestionControl schema={props.schema} data={props.data} />
  );
}