import React from "react";
import {
  Roboto_900Black,
  Roboto_500Medium,
  Roboto_900Black_Italic,
  useFonts,
} from "@expo-google-fonts/roboto";
import { StyleSheet, View } from "react-native";
import { services } from "../types";
import { Text } from "react-native-paper";

const NgoServices = ({ service }: { service: services }) => {
  let [fontsLoaded] = useFonts({
    Roboto_500Medium,
    Roboto_900Black_Italic,
    Roboto_900Black,
  });

  if (!fontsLoaded) return null;
  return (
    <View style={styles.service}>
      <Text
        variant="headlineMedium"
        key={+" service name"}
        style={{ fontFamily: "Roboto_900Black_Italic" }}
      >
        {service.service}
      </Text>
      <Text
        variant="bodyLarge"
        key={" service information"}
        style={{ fontFamily: "Roboto_500Medium" }}
      >
        {service.information}
      </Text>
      <View>
        {service.languages.map((l: any) => (
          <Text
            variant="bodyMedium"
            key={l + " service languages"}
            style={{ fontFamily: "Roboto_500Medium" }}
          >
            {l}
            {service.languages?.length - 1 !== service.languages?.indexOf(l)
              ? " - "
              : ""}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default NgoServices;

const styles = StyleSheet.create({
  services: {
    marginLeft: 15,
  },
  service: {
    borderLeftColor: "#5ca7f0",
    borderLeftWidth: 8,
    marginBottom: 10,
    paddingLeft: 5,
  },
});
