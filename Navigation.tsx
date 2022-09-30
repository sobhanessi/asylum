// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import LoginPage from "./screens/LoginPage";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { MAIN_BOTTOM_NAVIGATION_COLOR, SCREEN_OPTION } from "./theme";
import { StyleSheet } from "react-native";
import Home from "./screens/Home";
import NGO from "./screens/NGO";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
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
            // else if (route.name === "NGO") {
            //   return focused ? (
            //     <Ionicons name="information-circle" size={32} />
            //   ) : (
            //     <Ionicons name="information-circle-outline" size={32} />
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
        <Tab.Screen
          name="Login"
          component={LoginPage}
          options={SCREEN_OPTION}
        />
        <Tab.Screen name="Home" component={Home} options={SCREEN_OPTION} />
        {/* <Tab.Screen name="NGO" component={NGO} options={SCREEN_OPTION} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});