import {StyleSheet} from 'react-native';

export default function () {
  return StyleSheet.create({
    container: {
      padding: 10,
      paddingHorizontal: 16,
      backgroundColor: '#9667DD',
      borderRadius: 40,
      justifyContent: 'center',
      alignItems: 'center',
    },
    label: {
      color: 'white',
      fontWeight: '500',
      fontSize: 15,
    },

    iconBtnContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    iconBtn: {
      padding: 10,
      paddingHorizontal: 16,
      backgroundColor: '#fff',
      borderRadius: 40,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    iconLabel: {
      color: 'black',
      fontWeight: '500',
      marginStart: 10,
    },

    fabContainer: {
      borderRadius: 30,
      height: 60,
      width: 60,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
}
