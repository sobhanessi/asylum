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
  let [fontsLodaded] = useFonts({
    Roboto_500Medium,
    Roboto_900Black,
  });
  if (!fontsLodaded) return <AppLoading />;
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
      horizontal={true}
    >
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
    width: "100%",
    height: 220,
    borderRadius: 15,
    marginBottom: 10,
  },
  information: {
    fontSize: 18,
    marginBottom: 5,
    marginLeft: 4,
    width: "100%",
  },

  name: {
    width: "100%",
    fontSize: 28,
    marginBottom: 5,
    marginLeft: 4,
  },
  services: {
    color: "gray",
    fontSize: 18,
    marginBottom: 10,
    marginLeft: 4,
    paddingBottom: 10,
    width: "90%",
  },
});
