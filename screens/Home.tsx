import AppLoading from "expo-app-loading";
import ngos from "../database/ngos";
import React from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  Roboto_900Black,
  Roboto_500Medium,
  useFonts,
} from "@expo-google-fonts/roboto";

interface ngo {
  _id: string;
  name: string;
  logo: string;
  services: string[];
  information?: string;
  address?: string;
  telephones?: string[];
}

// TODO : 1. to implement filter in this page.
// TODO : 2. to implement

const Item = ({ item }: { item: ngo }) => {
  const windowWidth = Dimensions.get("window").width;
  const itemWidth = windowWidth - 10;
  let [fontsLoaded] = useFonts({
    Roboto_500Medium,
    Roboto_900Black,
  });
  if (!fontsLoaded) return <AppLoading />;
  else
    return (
      <View
        style={{
          width: itemWidth,
          ...styles.container,
        }}
        key={item._id}
      >
        <Image
          source={require("../assets/unhcr.png")}
          style={styles.image}
          key={item._id + " Image"}
        />
        <Text
          style={[styles.name, { fontFamily: "Roboto_900Black" }]}
          key={item._id + " Text1"}
        >
          {item.name}
        </Text>
        <Text
          style={[styles.information, { fontFamily: "Roboto_500Medium" }]}
          key={item._id + " Text2"}
        >
          Services :
        </Text>

        <Text
          style={[
            styles.services,
            { fontFamily: "Roboto_500Medium", textAlign: "center" },
          ]}
          key={item._id + " Text3"}
        >
          {item.services?.map((service) => (
            <Text
              style={{ textAlign: "justify" }}
              key={item._id + " Text 4" + service}
            >
              {service}{" "}
              {item.services?.length - 1 !== item.services?.indexOf(service)
                ? "- "
                : ""}
            </Text>
          ))}
        </Text>
      </View>
    );
};
const Home = () => {
  const renderItem = ({ item }: { item: ngo }) => (
    <Item item={item} key={item._id} />
  );
  return (
    <ScrollView
      style={{
        flex: 1,
      }}
    >
      <Text style={{ flex: 1 }}>filter</Text>
      <FlatList
        data={ngos}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        numColumns={1}
        centerContent={true}
      />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: { flex: 1, marginLeft: 4.5, marginRight: 4.5 },
  image: {
    borderRadius: 15,
    height: 220,
    width: "100%",
  },
  information: {
    fontSize: 18,
    marginBottom: 5,
    paddingLeft: 15,
    top: -50,
    width: "100%",
  },

  name: {
    backgroundColor: "white",
    fontSize: 28,
    opacity: 0.7,
    paddingBottom: 12,
    paddingLeft: 15,
    paddingTop: 5,
    top: -55,
    width: "100%",
    zIndex: 1,
  },
  services: {
    color: "gray",
    fontSize: 18,
    top: -50,
    width: "90%",
  },
});
