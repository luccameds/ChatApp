import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState, useCallback, useEffect } from "react";
import { View } from "react-native";

import {
  Bubble,
  Send,
  InputToolbar,
  GiftedChat,
} from "react-native-gifted-chat";

export default function ChatComponent() {
  const [messages, setMessages] = useState<any>([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []);

  const onSend = useCallback<any>((messages = []) => {
    setMessages((previousMessages: any) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  const renderBubble = (props: any) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: { backgroundColor: "#df5500" },
          left: {
            backgroundColor: "#303030",
          },
        }}
        textStyle={{
          right: {
            color: "white",
          },
          left: {
            color: "white",
          },
        }}
        timeTextStyle={{
          left: {
            color: "white",
          },
          right: {
            color: "white",
          },
        }}
        containerStyle={{
          backgroundColor: "black",
          borderTopColor: "#E8E8E8",
          borderTopWidth: 1,
          padding: 8,
        }}
      />
    );
  };

  const customtInputToolbar = (props: any) => {
    return (
      <InputToolbar
        {...props}
        containerStyle={{
          backgroundColor: "#101010",
          color: "white",
        }}
        placeholder="Digite sua mensagem..."
        textInputStyle={{ color: "white" }}
      />
    );
  };

  const renderSend = (props: any) => {
    return (
      <Send {...props}>
        <View>
          <MaterialCommunityIcons
            name="send-circle"
            size={30}
            style={{ margin: 6 }}
            color="white"
          />
        </View>
      </Send>
    );
  };

  const scrollToBottomComponent = () => {
    return <FontAwesome name="angle-double-down" size={20} color="#303030" />;
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
      }}
      alwaysShowSend
      renderBubble={renderBubble}
      renderInputToolbar={(props) => customtInputToolbar(props)}
      renderSend={renderSend}
      scrollToBottom
      scrollToBottomComponent={scrollToBottomComponent}
    />
  );
}
