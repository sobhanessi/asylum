import { AppContext } from "../context/context";
// import languages from "../database/supportedLanguages.json";
import countries from "../database/supportedCountries.json";
import LoginPageButtons from "../components/LoginPageButtons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Picker } from "@react-native-picker/picker";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../types";

const SelectCountryPage = () => {
  const { selectCountry, setSelectCountry } = React.useContext(AppContext);
  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, "SelectCountryPage">
    >();
  const params = useRoute<RouteProp<RootStackParamList, "SelectCountryPage">>();

  const { language } = params.params;
  return (
    <View style={styles.container}>
      <View style={styles.selectCountryView}>
        <Text variant="headlineSmall" style={styles.titleText}>
          Select Your Country :
        </Text>
        <Picker
          selectedValue={selectCountry}
          onValueChange={(itemValue, itemIndex) => setSelectCountry(itemValue)}
          style={{
            backgroundColor: "white",
            borderRadius: 15,
          }}
        >
          <Picker.Item label="Select Your Country : " value="" />
          {countries.map((c) => (
            <Picker.Item label={c.country} value={c.code} key={c.code} />
          ))}
        </Picker>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <LoginPageButtons
          text="Back"
          buttonStyle={{ marginBottom: 20 }}
          textStyle={{}}
          onPress={() => navigation.goBack()}
        />
        <LoginPageButtons
          text="Next"
          buttonStyle={{ marginBottom: 20 }}
          textStyle={{}}
          onPress={() => console.log("")}
        />
      </View>
    </View>
  );
};

export default SelectCountryPage;

const styles = StyleSheet.create({
  container: { flex: 1, display: "flex", flexDirection: "column" },
  selectCountryView: {
    flex: 1,
    marginTop: "5%",
    marginBottom: "5%",
    display: "flex",
    alignSelf: "center",
    justifyContent: "center",
  },
  titleText: {
    marginBottom: "5%",
    fontWeight: "bold",
  },
});
