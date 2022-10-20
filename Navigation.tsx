import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import Ionicons from "@expo/vector-icons/Ionicons";
import LoginPage from "./screens/LoginPage";
import { MAIN_BOTTOM_NAVIGATION_COLOR, SCREEN_OPTION } from "./theme";
import { NavigationContainer } from "@react-navigation/native";
import NGO from "./screens/NGO";
import React from "react";
import { StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const StackScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Navigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="NGO" component={NGO} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Navigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          // let iconName:string;

          if (route.name === "Home") {
            return focused ? (
              <Ionicons name="home" size={32} />
            ) : (
              <Ionicons name="home-outline" size={32} />
            );
          } else if (route.name === "Login") {
            return focused ? (
              <Ionicons name="log-in" size={32} />
            ) : (
              <Ionicons name="log-in-outline" size={32} />
            );
          }
          // else if (route.name === "Messaging") {
          //   return focused ? (
          //     <Ionicons name="mail" size={32} />
          //   ) : (
          //     <Ionicons name="mail-outline" size={32} />
          //   );
          // }
        },
        tabBarStyle: {
          borderTopRightRadius: 25,
          borderTopLeftRadius: 25,
          height: 60,
          bgcolor: MAIN_BOTTOM_NAVIGATION_COLOR,
        },
        tabBarLabelStyle: {
          paddingBottom: 10,
        },
        tabBarIconStyle: {},
      })}
    >
      <Tab.Screen name="Login" component={LoginPage} options={SCREEN_OPTION} />
      <Tab.Screen name="Home" component={Home} options={SCREEN_OPTION} />
    </Tab.Navigator>
  );
};

export default Navigation;
export { StackScreen };

const styles = StyleSheet.create({});
