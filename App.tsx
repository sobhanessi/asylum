import { MAIN_BACKGROUND_COLOR } from "./theme";
import Navigation from "./Navigation";
// import { Provider } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
// import store from "./redux/store";
import { StyleSheet } from "react-native";
import React from "react";

export default function App() {
  // 1. inja bayad user ro az storage begiram va baadesh loadesh konam...
  // agar ok bood ke hich amma agar na ke bayad dobare login kone.
  // 2. aya be redux ehtiaj daram ? fekr konam na.
  // 3. dar marhaleye konooni faghat rooye ye app e static tamarkoz konam.
  // 4. ghabeliate search ro faraham konam ke user ha betoonan un chizi...
  // ke mikhan ro peyda konan.
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
