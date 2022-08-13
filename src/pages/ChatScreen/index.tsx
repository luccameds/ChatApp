import React from "react";
import { StyleSheet, View } from "react-native";

import ChatComponent from "../../components/Chat";

const ChatScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <ChatComponent />
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e1e",
  },
});
