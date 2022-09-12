import React, {Component} from 'react';
import {Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import ButtonStyles from './ButtonStyles';

const styles = ButtonStyles();

interface ButtonProps {
  label: string;
  onPress: () => void;
  style?: ViewStyle;
}

const Filled: React.FC<ButtonProps> = ({label, onPress, style}) => {
  return (
    <TouchableOpacity style={[style, styles.container]} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default class Button extends Component {
  static Filled = Filled;

  render() {
    return <View />;
  }
}
