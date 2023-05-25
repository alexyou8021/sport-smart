import React, { useState } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Text } from 'react-native';

const channels = [
  { id: 1, name: 'Channel 1' },
  { id: 2, name: 'Channel 2' },
  // Add more channels as needed
];

export default function ChannelScreen({ navigation }) {
  const onPressChannel = (channel) => {
    navigation.navigate('Chat', { channelId: channel.id, channelName: channel.name });
  };

  const renderChannelItem = ({ item }) => (
    <TouchableOpacity
      style={styles.channelItem}
      onPress={() => onPressChannel(item)}
    >
      <Text style={styles.channelName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={channels}
        renderItem={renderChannelItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  channelItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  channelName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});