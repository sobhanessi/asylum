import { Card, Paragraph, Text, Title } from "react-native-paper";
import {
  Dimensions,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { filterPage, ngo, RootStackParamList } from "../types";
import LoginPageButtons from "../components/LoginPageButtons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import ngos from "../database/ngos";
import { RouteProp } from "@react-navigation/native";
import React from "react";
import {
  Roboto_900Black,
  Roboto_500Medium,
  useFonts,
} from "@expo-google-fonts/roboto";
import { useNavigation, useRoute } from "@react-navigation/native";

// todo : 1. fixing the problem with the pics.
// todo : 2. making a better ui in filter page.
// todo : 3. making better ui in ngo page.
// todo : 4.

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

  if (!fontsLoaded) return null;
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
        <Card
          // elevation={5}
          style={{ borderRadius: 25, marginBottom: 10 }}
          mode="contained"
          key={item._id + item.name}
        >
          <Card.Cover
            source={require("../assets/unhcr.png")}
            style={styles.image}
          />
          <Card.Content key={item._id}>
            <Title
              style={[styles.name, { fontFamily: "Roboto_900Black" }]}
              key={item._id + "Title"}
            >
              {item.name}
            </Title>
            <Paragraph
              style={[styles.information, { fontFamily: "Roboto_500Medium" }]}
              key={item._id + " information"}
            >
              {item.information}
            </Paragraph>
            <Paragraph
              style={[
                styles.services,
                { fontFamily: "Roboto_500Medium", textAlign: "center" },
              ]}
              key={item._id + " services"}
            >
              {item.services?.map((service) => (
                <Paragraph
                  style={[styles.services, { textAlign: "justify" }]}
                  key={item._id + " service" + service.service}
                >
                  {service.service}{" "}
                  {item.services?.length - 1 !== item.services?.indexOf(service)
                    ? "- "
                    : ""}
                </Paragraph>
              ))}
            </Paragraph>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
};

const Home = () => {
  const filterNavigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, "Filter">>();

  const renderItem = ({ item }: { item: ngo }) => (
    <Item item={item} key={item._id} />
  );

  const params = useRoute<RouteProp<RootStackParamList, "Main">>();

  const {
    name,
    counselor,
    lawyer,
    psychologist,
    socialWorker,
    location,
  }: filterPage = params.params?.filter || {
    name: "",
    counselor: false,
    lawyer: false,
    psychologist: false,
    socialWorker: false,
    location: "",
  };
  let newNgo = ngos;

  // in ghesmat ro behtar konam.

  if (name.length) {
    newNgo = newNgo.filter(
      (ngo) => ngo.name.toLowerCase() === name.toLowerCase()
    );
    // newNgo.length === 0 &&
    //   newNgo.filter((ngo) => ngo.name.toLowerCase().includes(name));
  }
  if (location.length)
    newNgo = ngos.filter((ngo) => ngo.address?.city === location);

  if (counselor)
    newNgo = newNgo.filter((ngo) =>
      ngo.services.some((service) => service.service === "Counselor")
    );

  if (lawyer)
    newNgo = newNgo.filter((ngo) =>
      ngo.services.some((m) => m.service === "Lawyer")
    );

  if (psychologist)
    newNgo = newNgo.filter((ngo) =>
      ngo.services.some((service) => service.service === "Psychologist")
    );

  if (socialWorker)
    newNgo = newNgo.filter((ngo) =>
      ngo.services.some((service) => service.service === "Social Worker")
    );

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <LoginPageButtons
        text="Filter"
        textStyle={{
          fontStyle: "bold",
          fontSize: 20,
        }}
        buttonStyle={{ marginTop: "5%", marginBottom: "5%" }}
        onPress={() => filterNavigation.navigate("Filter")}
      />
      <View style={{ flex: 1 }}>
        {newNgo.length ? (
          <FlatList
            data={newNgo}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
            numColumns={1}
            centerContent={true}
          />
        ) : (
          <Text style={{ alignItems: "center", alignContent: "center" }}>
            There is no data.
          </Text>
        )}
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
    fontSize: 22,
    marginBottom: 5,
    paddingLeft: 10,
    width: "100%",
  },

  name: {
    fontSize: 32,
    paddingBottom: 12,
    paddingLeft: 10,
    marginTop: 15,
  },
  services: {
    color: "gray",
    fontSize: 20,
    width: "90%",
    marginTop: 10,
  },
});
