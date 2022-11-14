import AppLoading from "expo-app-loading";
import {
  Image,
  StyleSheet,
  // Text,
  View,
  Dimensions,
  ScrollView,
} from "react-native";
import React from "react";
import {
  Roboto_900Black,
  Roboto_500Medium,
  Roboto_900Black_Italic,
  useFonts,
} from "@expo-google-fonts/roboto";
import { DataTable, Text } from "react-native-paper";
import { useRoute, RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../types";
import NgoServices from "../components/NgoServices";
import NgoOpeningHours from "../components/NgoOpeningHours";

const NGO = () => {
  const route = useRoute<RouteProp<RootStackParamList, "NGO">>();
  const {
    _id,
    address,
    information,
    logo,
    name,
    services,
    telephones,
    openingHours,
  } = route.params.item;

  const windowWidth = Dimensions.get("window").width;
  const itemWidth = windowWidth - 10;
  let [fontsLoaded] = useFonts({
    Roboto_500Medium,
    Roboto_900Black_Italic,
    Roboto_900Black,
  });

  if (!fontsLoaded) return null;
  else
    return (
      <ScrollView style={styles.scrollView}>
        <Image
          source={require("../assets/unhcr.png")}
          style={styles.image}
          key={_id + "image"}
        />
        <Text
          variant="displayLarge"
          style={[styles.name, { fontFamily: "Roboto_900Black" }]}
          key={"name"}
        >
          {name}
        </Text>
        <Text
          variant="headlineLarge"
          style={[
            styles.information,
            styles.ngoInformation,
            { fontFamily: "Roboto_900Black_Italic" },
          ]}
          key={"information"}
        >
          {"„ " + information + "“"}
        </Text>
        <Text
          variant="headlineMedium"
          style={[
            styles.services,

            { fontFamily: "Roboto_500Medium", marginTop: 20 },
          ]}
          key={"services"}
        >
          Services :
        </Text>

        <View style={styles.services} key={"services bar"}>
          {services.map((service) => (
            <NgoServices service={service} key={service.service} />
          ))}
        </View>
        <Text
          variant="headlineMedium"
          style={[
            styles.openingHours,
            { fontFamily: "Roboto_500Medium", marginTop: 20 },
          ]}
          key={_id + " Text7"}
        >
          Opening Hours :
        </Text>

        <NgoOpeningHours openingHours={openingHours} />

        <Text
          variant="titleLarge"
          style={[styles.address, { fontFamily: "Roboto_500Medium" }]}
          key={_id + " Text5"}
        >
          Address :
        </Text>
        <Text
          style={[
            styles.information,
            { fontFamily: "Roboto_900Black" },
            { marginBottom: 10 },
          ]}
          key={_id + " Text6"}
        >
          {address.city}
          {", "}
          {address.address}
        </Text>
      </ScrollView>
    );
};

export default NGO;

const styles = StyleSheet.create({
  address: {
    fontSize: 24,
    marginTop: 20,
    width: "90%",
    marginRight: "5%",
    marginLeft: "5%",
  },
  container: {
    flex: 1,
    marginLeft: 4.5,
    marginRight: 4.5,
  },
  image: {
    borderRadius: 15,
    height: 350,
    width: "100%",
  },
  information: {
    width: "90%",
    fontSize: 26,
    marginBottom: 5,
    marginRight: "5%",
    marginLeft: "5%",
    // quotes: '"„" "“"',\
  },

  name: {
    width: "90%",
    marginRight: "5%",
    marginLeft: "5%",
    marginTop: 10,
    marginBottom: 10,
    // textDecorationColor: "#cf2e2e",
    textDecorationLine: "underline",
  },
  ngoInformation: {
    // color: "#9b51e0",
    color: "#0693e3",
  },
  openingHours: {
    width: "90%",
    marginRight: "5%",
    marginLeft: "5%",
    color: "#cf2e2e",
  },
  scrollView: {
    // marginLeft: 5,
    // marginRight: 5,
  },
  services: {
    width: "90%",
    marginRight: "5%",
    marginLeft: "5%",
    color: "#cf2e2e",
  },
});
