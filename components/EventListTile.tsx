import { View, StyleSheet, Text, TouchableOpacity, Animated } from 'react-native';

function onEventTapped(setIsOverlayVisible, animateOverlay) {
  setIsOverlayVisible(true)
  Animated.timing(animateOverlay, {
        toValue: 0, // Adjust this value based on your desired off-screen position
        duration: 500, // Adjust the duration as needed
        useNativeDriver: true,
      }).start();
      
}

export default function EventListTile({setIsOverlayVisible, animateOverlay}) {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.tile} onPress={()=>onEventTapped(setIsOverlayVisible, animateOverlay)}>
          <View style={styles.contents}>
              <Text style={{flex: 2, fontWeight: 'bold', fontSize: 20}}>Name</Text>
              <Text style={{flex: 1, fontSize: 14}}>Date/Time</Text>
              <Text style={{flex: 1, fontSize: 14}}>Location</Text>
              <Text style={{flex: 1, fontSize: 14}}>30 others are attending</Text>
          </View>
  
          <View style={styles.rsvp}>
            <View style={styles.buttonView}>
            <TouchableOpacity style={styles.button}>
                  <Text>Going</Text>
                  </TouchableOpacity>
            </View>
            <View style={styles.buttonView}>
            <TouchableOpacity style={styles.button}>
                  <Text>Can't Go</Text>
                  </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
      alignSelf: "stretch",
      backgroundColor: 'gold',
      flexDirection: 'column',
      alignItems: 'stretch',
      justifyContent: 'center',
      padding: 10,
    },
    tile: {
      flex: 1,
      backgroundColor: 'cyan',
      alignItems: 'stretch',
      justifyContent: 'space-between',
      flexDirection: 'column',
      shadowOffset: {width: 2, height: 4},
      shadowOpacity: 0.3,
      elevation: 5,
      borderRadius: 10,
    },
    contents: {
      flex: 0.8,
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'column',
    },
    rsvp: {
      alignItems: 'stretch',
      justifyContent: 'space-evenly',
      flex: 0.2,
      flexDirection: 'row',
      padding: 5,
    },
    buttonView: {
      backgroundColor: "yellow",
      flex: 1,
      alignItems: 'stretch',
      justifyContent: 'center',
      paddingHorizontal: 5,
    },
    button: {
      backgroundColor: "purple",
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      shadowOffset: {width: 2, height: 4},
      shadowOpacity: 0.3,
      elevation: 5,
      borderRadius: 10,
    }
});