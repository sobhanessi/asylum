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
  const windowWidth = Dimensions.get("window").width;
  const itemWidth = windowWidth / 2 - 10;
  return (
    <View
      style={{
        width: itemWidth,
        ...styles.container,
      }}
    >
      <Image source={require("../assets/unhcr.png")} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.information}>{item.information}</Text>
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
        columnWrapperStyle={{ display: "flex", justifyContent: "space-around" }}
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
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    fontSize: 18,
    marginBottom: 10,
    marginLeft: 4,
    paddingBottom: 10,
    width: "100%",
  },
  name: {
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 5,
    marginLeft: 4,
    width: 120,
  },
});
