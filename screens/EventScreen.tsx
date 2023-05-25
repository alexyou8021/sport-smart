import { Text, View, ScrollView , StyleSheet, TouchableOpacity} from "react-native"
import EventTile from "../components/EventTile";
import EventListTile from "../components/EventListTile";
import EventOverlay from "../components/Overlay";
import { useState } from "react";
import { Animated } from "react-native";

export default function EventScreen(navigation) {
    var eventTiles = [];

    const [isOverlayVisible, setIsOverlayVisible] = useState(false);
    const [animateOverlay, setAnimateOverlay] = useState(new Animated.Value(0));

    for (let i = 0; i < 8; i++) {
        eventTiles.push(
            <EventListTile key={String(i)} setIsOverlayVisible={setIsOverlayVisible} animateOverlay={animateOverlay}></EventListTile>
        );
    }

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contents}>
            <EventOverlay isOverlayVisible={isOverlayVisible} setIsOverlayVisible={setIsOverlayVisible} translateY={animateOverlay} setAnimateOverlay={setAnimateOverlay}>
                <View style={styles.overlay}>
                    <Text style={{flex: 1, fontWeight: 'bold', fontSize: 20}}>Event Name</Text>
                    <Text style={{flex: 1, fontSize: 14}}>Day, Date</Text>
                    <Text style={{flex: 1, fontSize: 14}}>X:XX XX</Text>

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

                    <Text style={{flex: 1, fontSize: 14}}>Hosted by Group</Text>
                    <Text style={{flex: 1, fontSize: 14}}>Description</Text>
                    <Text style={{flex: 1, fontSize: 14}}>GoingsGoinssssssGi</Text>
                    
                    
                </View>
                </EventOverlay>
            {eventTiles}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'black',
      flex: 1,
    },
    contents: {
        backgroundColor: 'ivory',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexGrow: 1,
        flexShrink: 0,
    },
    overlay: {
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexGrow: 1,
        flexShrink: 0,
        alignSelf: 'stretch'
    },
    rsvp: {
        alignItems: 'stretch',
        justifyContent: 'space-evenly',
        flex: 1,
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