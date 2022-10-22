import AppLoading from "expo-app-loading";
import BottomSheet from "../components/BottomSheet";
import {
  Button,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import ngos from "../database/ngos";
import { ngo, RootStackParamList } from "../types";
import React from "react";
import {
  Roboto_900Black,
  Roboto_500Medium,
  useFonts,
} from "@expo-google-fonts/roboto";
import { Searchbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import LoginPageButtons from "../components/LoginPageButtons";
// import Navigation from "../Navigation";

const Item = ({ item }: { item: ngo }) => {
  const ngoNavigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, "NGO">>();
  const windowWidth = Dimensions.get("window").width;
  const itemWidth = windowWidth - 10;
  let [fontsLoaded] = useFonts({
    Roboto_500Medium,
    Roboto_900Black,
  });

  const onPress = () => {
    ngoNavigation.navigate("NGO", { item: item });
  };

  if (!fontsLoaded) return <AppLoading />;
  else
    return (
      <TouchableOpacity
        onPress={onPress}
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
      </TouchableOpacity>
    );
};

const Home = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query: string) => setSearchQuery(query);
  const filterNavigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, "Filter">>();

  const renderItem = ({ item }: { item: ngo }) => (
    <Item item={item} key={item._id} />
  );

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          width: "80%",
          marginRight: "10%",
          marginLeft: "10%",
          marginTop: "5%",
          marginBottom: "5%",
        }}
      >
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <LoginPageButtons
        text="Filter"
        textStyle={{}}
        buttonStyle={{}}
        onPress={() => filterNavigation.navigate("Filter")}
      />
      <View style={{ flex: 1 }}>
        <FlatList
          data={ngos}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
          numColumns={1}
          centerContent={true}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: { flex: 1, marginLeft: 4.5, marginRight: 4.5 },
  image: {
    borderRadius: 15,
    height: 260,
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
