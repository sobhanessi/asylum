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
        marginLeft: 4.5,
        marginRight: 4.5,
      }}
    >
      <Image
        source={require("../assets/unhcr.png")}
        style={{
          width: "100%",
          height: 120,
          borderRadius: 15,
          marginBottom: 10,
        }}
      />
      <Text style={{ marginBottom: 5, width: 120 }}>{item.name}</Text>
      <Text style={{ marginBottom: 10, width: 120 }}>{item.information}</Text>
    </View>
  );
};
const Home = () => {
  const renderItem = ({ item }: { item: ngo }) => <Item item={item} />;

  return (
    <ScrollView
      style={{
        flex: 1,
        // width: "100%",
        // flexWrap: "wrap",
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

const styles = StyleSheet.create({});
