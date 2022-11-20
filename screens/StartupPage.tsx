import { AppContext } from "../context/context";
import languages from "../database/supportedLanguages.json";
import LoginPageButtons from "../components/LoginPageButtons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Picker } from "@react-native-picker/picker";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../types";

// todo : too in safhe az user beporsam ke che zabani dare. ++
// todo : baad passesh bedam be safheye keshvar. ++
// todo : baad passesh bedam be safheye shahr.
// todo : baad passesh bedam be safheye main

const StartupPage = () => {
  const { selectLanguage, setSelectLanguage } = React.useContext(AppContext);
  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, "StartupPage">
    >();
  return (
    <View style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <View
        style={{
          flex: 1,
          //   width: 220,
          // marginRight: "10%",
          // marginLeft: "10%",
          marginTop: "5%",
          marginBottom: "5%",
          // borderRadius: 15,
          display: "flex",
          // alignContent: "center",
          alignSelf: "center",
          justifyContent: "center",
          // alignItems: "center",
        }}
      >
        <Text variant="headlineSmall" style={styles.titleText}>
          Select Your Language :
        </Text>
        <Picker
          selectedValue={selectLanguage}
          onValueChange={(itemValue, itemIndex) => setSelectLanguage(itemValue)}
          style={{
            backgroundColor: "white",
            borderRadius: 15,
          }}
        >
          <Picker.Item label="Select Your Language : " value="" />
          {languages.map((l) => (
            <Picker.Item label={l.language} value={l.code} key={l.code} />
          ))}
        </Picker>
      </View>
      <LoginPageButtons
        text="Next"
        buttonStyle={{ marginBottom: 20 }}
        textStyle={{}}
        onPress={() =>
          selectLanguage.length > 0 &&
          navigation.push("SelectCountryPage", { language: selectLanguage })
        }
      />
    </View>
  );
};

export default StartupPage;

const styles = StyleSheet.create({
  titleText: {
    marginBottom: "5%",
    fontWeight: "bold",
  },
});
