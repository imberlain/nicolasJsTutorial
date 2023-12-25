import MyComponent from "./firstRN";
import React from "react";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: 375,
    height: 812,
  },
});

const App = () => {
  return (
    <View>
      <Text>Welcome to my app</Text>
      <MyComponent />
    </View>
  );
};

export default App;
