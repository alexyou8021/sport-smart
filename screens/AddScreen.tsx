import { View, Text, StyleSheet, TextInput, Button } from "react-native"

export default function AddScreen() {

  return (
    <View style={styles.overlay}>
                    <TextInput style={styles.title}>Untitled Event</TextInput>
                    <View></View>
                    <TextInput style={styles.text}>Day, Date TBD</TextInput>
                    <TextInput style={styles.text}>Time TBD</TextInput>

                    <Text style={styles.text}>Event Type</Text>
                    <Text style={styles.text}>Hosted by Group</Text>
                    <TextInput style={[styles.text, {flex: 5}]} multiline>Description</TextInput>
                    <Button title='Create'></Button>
                </View>
  )
}

const styles = StyleSheet.create({
    overlay: {
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexGrow: 1,
        flexShrink: 0,
        alignSelf: 'stretch'
    },
    title: {
        flex: 2,
        fontWeight: 'bold',
        fontSize: 20,
        backgroundColor: 'rgba(128, 128, 128, 0.8)',
        alignSelf: 'stretch',
        textAlign: 'center',
        margin: 10,
        color: 'white',
    },
    text: {
        flex: 1,
        fontSize: 14,
        backgroundColor: 'rgba(128, 128, 128, 0.8)',
        alignSelf: 'stretch',
        // textAlign: 'left',
        marginHorizontal: 30,
        marginVertical: 10,
        padding: 10,
        color: 'white',
    }

});