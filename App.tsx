import { MAIN_BACKGROUND_COLOR } from "./theme";
import Navigation from "./Navigation";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={MAIN_BACKGROUND_COLOR} />
      <Navigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
