import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

export default function PageHeader(props) {
  return (
    <Text>{props.children}</Text>
  );
}

PageHeader.PropTypes = {
  children: PropTypes.node,
};
