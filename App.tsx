import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import TitleBar from './components/TitleBar';
import NavigationBar from './screens/NavigationBar';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <TitleBar/>
      <NavigationBar/>
    </SafeAreaView>
  );
}
