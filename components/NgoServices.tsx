import React from "react";
import {
  Roboto_900Black,
  Roboto_500Medium,
  Roboto_900Black_Italic,
  useFonts,
} from "@expo-google-fonts/roboto";
import { Image, StyleSheet, View } from "react-native";
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
      <View style={{ width: "33%", marginRight: 10 }}>
        <Image
          source={require("../assets/psychologist.jpg")}
          style={{ height: 125, width: "auto", borderRadius: 15 }}
        />
      </View>
      <View>
        <Text
          variant="headlineMedium"
          key={+" service name"}
          style={[
            styles.serviceTitle,
            { fontFamily: "Roboto_900Black_Italic" },
          ]}
        >
          {service.service}
        </Text>
        <Text
          variant="bodyLarge"
          key={" service information"}
          style={[
            styles.serviceInformation,
            { fontFamily: "Roboto_500Medium" },
          ]}
        >
          {service.information}
        </Text>
        {service.languages.map((l: any) => (
          <Text
            variant="bodyMedium"
            key={l + " service languages"}
            style={[styles.serviceLanguage, { fontFamily: "Roboto_500Medium" }]}
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
    // borderLeftColor: "#5ca7f0",
    borderLeftWidth: 8,
    marginBottom: 10,
    paddingLeft: 5,
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
  serviceInformation: {
    // color: "#cf2e2e",
    color: "gray",
  },
  serviceLanguage: {
    // color: "#abb8c3",
    // color: "#f78da7",
    color: "gray",
  },
  serviceTitle: {
    // color: "#f15928",
  },
});
