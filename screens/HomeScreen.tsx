import { View, Text, StyleSheet } from "react-native"
import EventTile from "../components/EventTile";
import TeamTile from "../components/TeamTile";
import FeedbackTile from "../components/FeedbackTile";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EventScreen from "./EventScreen";
import TeamScreen from "./TeamScreen";

const Stack = createNativeStackNavigator();

export default function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <EventTile navigation={navigation}></EventTile>
            <TeamTile navigation={navigation}></TeamTile>
            <FeedbackTile/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightblue',
      alignItems: 'center',
      justifyContent: 'flex-start',
      margin: 10,
    },
});