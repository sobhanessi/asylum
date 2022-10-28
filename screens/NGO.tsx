import AppLoading from "expo-app-loading";
import {
  Image,
  StyleSheet,
  Text,
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

const NGO = ({ route }: { route: any }) => {
  const { _id, address, information, logo, name, services, telephone } =
    route.params.item;

  const windowWidth = Dimensions.get("window").width;
  const itemWidth = windowWidth - 10;
  let [fontsLoaded] = useFonts({
    Roboto_500Medium,
    Roboto_900Black_Italic,
    Roboto_900Black,
  });

  if (!fontsLoaded) return <AppLoading />;
  else
    return (
      <ScrollView style={{}}>
        <Image source={require("../assets/unhcr.png")} style={styles.image} />
        <Text
          style={[styles.name, { fontFamily: "Roboto_900Black" }]}
          key={_id + " Text1"}
        >
          {name}
        </Text>
        <Text
          style={[styles.information, { fontFamily: "Roboto_900Black_Italic" }]}
          key={_id + " Text11"}
        >
          {"„ " + information + "“"}
        </Text>
        <Text
          style={[
            styles.information,
            { fontFamily: "Roboto_500Medium", marginTop: 20 },
          ]}
          key={_id + " Text2"}
        >
          Services :
        </Text>
        <Text
          style={[
            styles.services,
            { fontFamily: "Roboto_500Medium", textAlign: "center" },
          ]}
          key={_id + " Text3"}
        >
          {services?.map((service) => (
            <Text
              style={{ textAlign: "justify" }}
              key={_id + " Text 4" + service}
            >
              {service}{" "}
              {services?.length - 1 !== services?.indexOf(service) ? "- " : ""}
            </Text>
          ))}
        </Text>
        <Text
          style={[styles.address, { fontFamily: "Roboto_500Medium" }]}
          key={_id + " Text5"}
        >
          Address :
        </Text>
        <Text
          style={[styles.information, { fontFamily: "Roboto_900Black" }]}
          key={_id + " Text6"}
        >
          {address}
        </Text>
      </ScrollView>
    );
};

export default NGO;

const styles = StyleSheet.create({
  address: {
    fontSize: 24,
    marginTop: 20,
    paddingLeft: 15,
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
    fontSize: 26,
    marginBottom: 5,
    paddingLeft: 15,
    width: "100%",
    // quotes: '"„" "“"',
  },

  name: {
    fontSize: 36,
    paddingBottom: 12,
    paddingLeft: 15,
    paddingTop: 5,
    width: "100%",
  },
  services: {
    color: "gray",
    fontSize: 18,
    width: "90%",
  },
});
