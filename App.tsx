import { MAIN_BACKGROUND_COLOR } from "./theme";
import Navigation from "./Navigation";
// import { Provider } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
// import store from "./redux/store";
import { StyleSheet } from "react-native";
import React from "react";

export default function App() {
  return (
    // <Provider store={store}>
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={MAIN_BACKGROUND_COLOR} />
      <Navigation />
      {/* <StackScreen /> */}
    </SafeAreaView>
    // </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
