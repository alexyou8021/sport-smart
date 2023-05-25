import React, { useState } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';

export default function ChatScreen() {
  const [messages, setMessages] = useState([]);

  const onSend = (newMessages = []) => {
    setMessages((prevMessages) =>
      GiftedChat.append(prevMessages, newMessages.map((message) => {
        return {
          ...message,
          user: {
            _id: 1, // Identifier for the current user
            name: 'Your Aame', // Name of the current user
            // Add any other user details as needed
          },
        };
      }))
    );
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={(newMessages) => onSend(newMessages)}
      user={{
        _id: 1,
      }}
    />
  );
}