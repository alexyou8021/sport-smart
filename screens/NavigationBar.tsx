import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeScreen from './HomeScreen';
import ChatScreen from './ChatScreen';
import AddScreen from './AddScreen';
import ChannelScreen from './ChannelScreen';
import EventScreen from './EventScreen';
import TeamScreen from './TeamScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function NavigationBar() {
    return (
        <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
        <Tab.Screen
          name="Home"
          component={MainScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Add"
          component={AddScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="plus" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Chat"
          component={MessagingScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="chat" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
    )
}

function MainScreen() {
  return (
      <Stack.Navigator>
          <Stack.Screen
          name="Base"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Event"
          component={EventScreen}
        />
        <Stack.Screen
          name="Team"
          component={TeamScreen}
        />
      </Stack.Navigator>
  )
}

function MessagingScreen() {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="Channel"
          component={ChannelScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Chat"
          component={ChatScreen}
          options={({ route }) => ({ title: route.params.channelName })}
        />
      </Stack.Navigator>
  );
}