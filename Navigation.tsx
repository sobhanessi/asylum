import Home from "./screens/Home";
import { BottomNavigation } from "react-native-paper";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FilterPage from "./screens/FilterPage";
import LoginPage from "./screens/LoginPage";
import { NavigationContainer } from "@react-navigation/native";
import NGO from "./screens/NGO";
import React from "react";
import { StyleSheet } from "react-native";
import StartupPage from "./screens/StartupPage";
import SelectCountryPage from "./screens/SelectCountryPage";
import SelectCityPage from "./screens/SelectCityPage";

// felan niazi be login nist chera ke app gharare static bashe
// dar marhaleye avval.

const Stack = createNativeStackNavigator();

const BottomNav = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    // {
    //   key: "login",
    //   title: "Login",
    //   focusedIcon: "login",
    //   unfocusedIcon: "login",
    // },
    {
      key: "home",
      title: "Home",
      focusedIcon: "home",
      unfocusedIcon: "home-outline",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    // login: () => <LoginPage />,
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
        <Stack.Screen
          name="Startup"
          component={StartupPage}
          options={{
            // headerTitle: "Choose Your Language Preference",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SelectCountryPage"
          component={SelectCountryPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SelectCityPage"
          component={SelectCityPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={BottomNav}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="NGO" component={NGO} />
        <Stack.Screen name="Filter" component={FilterPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
