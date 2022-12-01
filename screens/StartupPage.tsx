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

const StartupPage = () => {
  const { selectLanguage, setSelectLanguage } = React.useContext(AppContext);
  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, "StartupPage">
    >();
  const onPressNext = () => {
    selectLanguage.length > 0 &&
      navigation.push("SelectCountryPage", { language: selectLanguage });
  };
  return (
    <View style={styles.container}>
      <View style={styles.languageView}>
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
        onPress={() => onPressNext()}
        icon="chevron-right"
      />
    </View>
  );
};

export default StartupPage;

const styles = StyleSheet.create({
  container: { flex: 1, display: "flex", flexDirection: "column" },
  languageView: {
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
