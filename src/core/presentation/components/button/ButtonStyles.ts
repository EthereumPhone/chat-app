import {StyleSheet} from 'react-native';

export default function () {
  return StyleSheet.create({
    container: {
      padding: 10,
      paddingHorizontal: 16,
      backgroundColor: '#9667DD',
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
    },
    label: {
      color: 'white',
      fontWeight: '500',
      fontSize: 15,
    },
  });
}
