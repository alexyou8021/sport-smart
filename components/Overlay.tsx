import { StyleSheet, View} from "react-native"
import { Overlay } from "react-native-elements"
import Tile from "./Tile"
import { Component } from "react"
import { Animated } from "react-native"
import { Dimensions } from "react-native"

export default class EventOverlay extends Component {
  constructor(props) {
    super();
  }

  toggleVisibility() {
        Animated.timing(this.props.translateY, {
            toValue: Dimensions.get('window').height, // Adjust this value based on your desired off-screen position
            duration: 500, // Adjust the duration as needed
            useNativeDriver: true,
          }).start(() => {
            this.props.setIsOverlayVisible(false)
          });
          
  }

  render() {
    const { translateY } = this.props
    return (
        <Overlay isVisible={this.props.isOverlayVisible} overlayStyle={styles.overlay} onBackdropPress={() => {this.toggleVisibility()}}>
            <Animated.View style={[styles.container, { transform: [{ translateY }] }]}>
                <Tile>
                    {this.props.children}
                </Tile>
            </Animated.View>
        </Overlay>
    );
  }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: "stretch",
        backgroundColor: 'blue',
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'center',
        padding: 5,
    },
    overlay: {
        flex: .75,
        alignSelf: 'stretch',
        margin: 20,
        backgroundColor: '#00000000',
    }
})