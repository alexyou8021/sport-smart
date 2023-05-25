
import { View, Text, StyleSheet, Image, StatusBar, Button, TouchableOpacity } from 'react-native';

function onPress() {

}

export default function TitleBar() {
  return (
    <View style={viewStyles.container}>
        <Image 
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={imageStyles.container}
        />
        <Text style={textStyles.container}>Title</Text>
        <TouchableOpacity style={buttonStyles.container} onPress={onPress}>
            <Text style={buttonTextStyles.container}>+</Text>
        </TouchableOpacity>
    </View>
  );
}

const viewStyles = StyleSheet.create({
    container: {
      backgroundColor: 'red',
      flex: .1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      paddingTop: StatusBar.currentHeight,
    },
});

const imageStyles = StyleSheet.create({
    container: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
        flex:1,
    }
})

const textStyles = StyleSheet.create({
    container: {
        flex:4,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
});

const buttonStyles = StyleSheet.create({
    container: {
      backgroundColor: 'red',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'bold,'
    },
});

const buttonTextStyles = StyleSheet.create({
    container: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
    },
});