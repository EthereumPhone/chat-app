import React, {Component} from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';

import {
  ColorValue,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
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

interface IconButtonProps {
  icon: React.ReactNode;
  label?: string;
  onPress: () => void;
  style?: ViewStyle;
  backgroundColor?: ColorValue;
  color?: ColorValue;
  borderColor?: ColorValue;
}

const Icon: React.FC<IconButtonProps> = ({
  icon,
  onPress,
  label,
  style,
  backgroundColor = '#9667DD',
  color,
  borderColor,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.iconBtn,
        {
          backgroundColor,
          borderColor,
          borderWidth: borderColor !== undefined ? 1 : 0,
        },
        style,
      ]}
      onPress={onPress}>
      {icon}
      {label !== undefined && (
        <Text style={[styles.iconLabel, {color}]}>{label}</Text>
      )}
    </TouchableOpacity>
  );
};

interface FABProps {
  icon: string;
  backgroundColor?: ColorValue;
  style?: ViewStyle;
  onPress: () => void;
}

const FAB: React.FC<FABProps> = ({
  icon,
  backgroundColor = '#9667DD',
  style,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.fabContainer, {backgroundColor}, style]}
      {...{onPress}}>
      <FeatherIcon name={icon} size={25} color="white" />
    </TouchableOpacity>
  );
};

export default class Button extends Component {
  static Filled = Filled;
  static Icon = Icon;
  static FAB = FAB;

  render() {
    return <View />;
  }
}
