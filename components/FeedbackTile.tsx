import { View, StyleSheet, Text } from 'react-native';
import Tile from './Tile';

export default function FeedbackTile() {
  return (
    <Tile>
        <View style={styles.container}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>Feedback</Text>
            <Text style={{fontSize: 14}}>Improve your game</Text>
        </View>
    </Tile>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'column',
    },
});