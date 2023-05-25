import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Tile from './Tile';

function onEventTapped({navigation}) {
  navigation.navigate('Team')
}

export default function TeamTile(navigation) {
  return (
    <Tile>
      <TouchableOpacity style={styles.tile} onPress={()=>onEventTapped(navigation)}>
        <View style={styles.contents}>
              <Text style={{flex: 1, fontWeight: 'bold', fontSize: 20}}>Team Info</Text>
              <Text style={{flex: 1, fontSize: 14}}>Roster Details</Text>
        </View>
      </TouchableOpacity>
    </Tile>
    
  );
}

const styles = StyleSheet.create({
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
  contents: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
});