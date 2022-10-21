import Home from "./screens/Home";
import LoginPage from "./screens/LoginPage";
import NGO from "./screens/NGO";
import React from "react";
import { StyleSheet } from "react-native";
import { BottomNavigation } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const BottomNav = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "login",
      title: "Login",
      focusedIcon: "login",
      unfocusedIcon: "login",
    },
    {
      key: "home",
      title: "Home",
      focusedIcon: "home",
      unfocusedIcon: "home-outline",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    login: () => <LoginPage />,
    home: () => <Home />,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="main" component={BottomNav} />
        <Stack.Screen name="NGO" component={NGO} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
