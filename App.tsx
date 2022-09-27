import LoginPage from "./screens/LoginPage";
import { MAIN_BACKGROUND_COLOR, MAIN_BUTTON_COLOR } from "./theme";
import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

const Stack = createNativeStackNavigator();

const SCREEN_OPTION: NativeStackNavigationOptions = {
  headerStyle: {
    backgroundColor: MAIN_BACKGROUND_COLOR,
  },
  headerTintColor: MAIN_BUTTON_COLOR,
  headerTitleStyle: {
    fontWeight: "bold",
  },
};

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={MAIN_BACKGROUND_COLOR} />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login Page"
            component={LoginPage}
            options={SCREEN_OPTION}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    backgroundColor: "#70A28",
  },
});
