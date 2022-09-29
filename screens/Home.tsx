import ngos from "../database/ngos";
import React from "react";
import {
  FlatList,
  Image,
  // ListViewBase,
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
        flexDirection: "row",
      }}
    >
      <Image
        source={require("../assets/logo.png")}
        style={{
          // display: "flex",
          width: 120,
          height: 120,
        }}
      />
      <Text>{item.name}</Text>
      <Text>{}</Text>
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
