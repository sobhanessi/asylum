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

const NGO = ({ route }: { route: any }) => {
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

        <View style={styles.services}>
          {services.map((service: any) => (
            <View style={styles.service}>
              <Text variant="headlineMedium" key={_id + "Text 41"}>
                {service.service}
              </Text>
              <Text variant="bodyLarge" key={_id + "Text 42"}>
                {service.information}
              </Text>
              <Text variant="bodyMedium" key={_id + "Text 43"}>
                {service.languages.map((l: any) => (
                  <Text>
                    {l}
                    {service.languages?.length - 1 !==
                    service.languages?.indexOf(l)
                      ? " - "
                      : ""}
                  </Text>
                ))}
              </Text>
            </View>
          ))}
        </View>
        <Text
          variant="headlineMedium"
          style={[
            styles.information,
            { fontFamily: "Roboto_500Medium", marginTop: 20 },
          ]}
          key={_id + " Text7"}
        >
          Opening Hours :
        </Text>
        <DataTable style={styles.table}>
          <DataTable.Header>
            {openingHours.map((oh: any) => (
              <DataTable.Title key={oh.day}>{oh.day}</DataTable.Title>
            ))}
          </DataTable.Header>
          <DataTable.Row>
            {openingHours.map((oh: any) => (
              <DataTable.Cell key={oh.day + oh.hours}>
                {oh.hours}
              </DataTable.Cell>
            ))}
          </DataTable.Row>
        </DataTable>

        <Text
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
          {address.city},{address.address}
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
    width: "98%",
    marginLeft: "1%",
    marginRight: "1%",
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
  openingHours: {
    marginLeft: 15,
    marginTop: 20,
  },
  services: {
    marginLeft: 15,
  },
  service: {
    borderLeftColor: "#5ca7f0",
    borderLeftWidth: 8,
    marginBottom: 10,
    paddingLeft: 5,
  },
  table: {
    textAlign: "center",
    justifyContent: "center",
    marginLeft: 15,
  },
});
