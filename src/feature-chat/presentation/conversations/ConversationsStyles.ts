import {StyleSheet} from 'react-native';

export default function () {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    fab: {
      position: 'absolute',
      right: 16,
      bottom: 16,
    },
    header: {
      fontSize: 30,
      fontWeight: '600',
      margin: 16,
      color: 'white',
    },
    listContainer: {
      paddingBottom: 82,
    },
    list: {
      flex: 1,
    },
  });
}
