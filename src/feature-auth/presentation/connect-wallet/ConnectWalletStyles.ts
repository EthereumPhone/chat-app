import {StyleSheet} from 'react-native';

export default function () {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end',
    },
    title: {
      fontSize: 30,
      fontWeight: '700',
      marginHorizontal: 16,
      color: 'white',
    },
    subtitle: {
      fontSize: 16,
      marginHorizontal: 16,
      marginTop: 4,
    },
    buttons: {
      margin: 16,
    },
    buttons2: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 8,
    },
    iconButton: {
      flex: 1,
    },
    connectBtn: {},
  });
}
