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
    },
    subtitle: {
      fontSize: 16,
      marginHorizontal: 16,
      marginTop: 4,
    },
    buttons: {
      flexDirection: 'row',
      marginHorizontal: 16,
      marginVertical: 16,
    },
  });
}
