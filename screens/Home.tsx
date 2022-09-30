import ngos from "../database/ngos";
import React from "react";
import {
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
  return (
    <View
      style={{
        flex: 1,
        // flexDirection: "row",
        width: 120,
        marginHorizontal: 35,
      }}
    >
      <Image
        source={require("../assets/unhcr.png")}
        style={{
          width: 120,
          height: 120,
          borderRadius: 15,
          marginBottom: 10,
        }}
      />
      <Text style={{ marginBottom: 5 }}>{item.name}</Text>
      <Text style={{ marginBottom: 10 }}>{item.information}</Text>
    </View>
  );
};
const Home = () => {
  const renderItem = ({ item }: { item: ngo }) => <Item item={item} />;

  return (
    <ScrollView
      style={{
        flex: 1,
        width: "100%",
        // flexWrap: "wrap",
      }}
      horizontal={true}
    >
      <FlatList
        data={ngos}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        numColumns={2}
      />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
