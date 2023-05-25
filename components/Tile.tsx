import { View, StyleSheet } from 'react-native';

export default function Tile({children}) {
  return (
    <View style={styles.container}>
      <View style={styles.tile}>
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: 'green',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: 10,
  },
  tile: {
    flex: 1,
    backgroundColor: 'cyan',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    shadowOffset: {width: 2, height: 4},
    shadowOpacity: 0.3,
    elevation: 5,
    borderRadius: 10,
  },
});