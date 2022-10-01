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
  key: string;
  name: string;
  logo: string;
  services?: string[];
  information?: string;
  address?: string;
  telephones?: string[];
}

const Item = ({ item }: { item: ngo }) => {
  // console.log(fontsLodaded);
  const windowWidth = Dimensions.get("window").width;
  const itemWidth = windowWidth / 2 - 10;
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
      >
        <Image source={require("../assets/unhcr.png")} style={styles.image} />
        <Text style={[styles.name, { fontFamily: "Roboto_900Black" }]}>
          {item.name}
        </Text>
        <Text style={[styles.information, { fontFamily: "Roboto_500Medium" }]}>
          {item.information}
        </Text>
        <Text style={[styles.information, { fontFamily: "Roboto_500Medium" }]}>
          Services :
        </Text>

        <Text
          style={[
            styles.services,
            { fontFamily: "Roboto_500Medium", textAlign: "center" },
          ]}
        >
          {item.services?.map((service) => (
            <Text style={{ textAlign: "justify" }}>{service} - </Text>
          ))}
        </Text>
      </View>
    );
};
const Home = () => {
  const renderItem = ({ item }: { item: ngo }) => <Item item={item} />;
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
        keyExtractor={(item) => item.key}
        numColumns={2}
        centerContent={true}
        columnWrapperStyle={{
          display: "flex",
          justifyContent: "space-around",
        }}
        contentContainerStyle={{ flexGrow: 1 }}
      />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: { marginLeft: 4.5, marginRight: 4.5 },
  image: {
    width: "100%",
    height: 180,
    borderRadius: 15,
    marginBottom: 10,
  },
  information: {
    // borderBottomWidth: 1,
    // borderBottomColor: "gray",
    // borderBottomLeftRadius: 25,
    // borderBottomRightRadius: 25,
    color: "gray",
    fontSize: 18,
    marginBottom: 5,
    marginLeft: 4,
    // paddingBottom: 10,
    width: "100%",
  },

  name: {
    // fontWeight: "bold",
    width: "100%",
    fontSize: 28,
    marginBottom: 5,
    marginLeft: 4,
    // width: 120,
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
