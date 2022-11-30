import { AppContext } from "../context/context";
import germanyCities from "../database/germanyCities.json";
import LoginPageButtons from "../components/LoginPageButtons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Picker } from "@react-native-picker/picker";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../types";

const SelectCityPage = () => {
  const { selectCity, setSelectCity } = React.useContext(AppContext);
  const { selectState, setSelectState } = React.useContext(AppContext);
  const [cities, setCities] = React.useState(germanyCities);
  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, "LookingFor">
    >();
  const params = useRoute<RouteProp<RootStackParamList, "SelectCityPage">>();

  const states = [...new Set(germanyCities.map((g) => g.state))];

  React.useEffect(() => {
    setCities(germanyCities.filter((g) => g.state === selectState));
  }, [selectState]);

  const { language, country } = params.params;

  const onPressNext = () => {
    selectCity &&
      navigation.push("LookingFor", {
        country: country,
        city: selectCity,
        language: language,
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.selectStateView}>
        <Text variant="headlineSmall" style={styles.titleText}>
          Select Your State And City :
        </Text>
        <Picker
          selectedValue={selectState}
          onValueChange={(itemValue, itemIndex) => setSelectState(itemValue)}
          style={{
            backgroundColor: "white",
            borderRadius: 15,
            marginBottom: "2%",
          }}
        >
          <Picker.Item label="Select Your State : " value="" />
          {states.map((s) => (
            <Picker.Item label={s} value={s} key={s} />
          ))}
        </Picker>
        {selectState.length > 0 && (
          <Picker
            selectedValue={selectCity}
            onValueChange={(itemValue, itemIndex) => setSelectCity(itemValue)}
            style={{
              backgroundColor: "white",
              borderRadius: 15,
            }}
          >
            <Picker.Item label="Select Your City : " value="" />
            {cities.map((g) => (
              <Picker.Item
                label={g.name}
                value={g.name}
                key={g.coords.lat + g.coords.lon}
              />
            ))}
          </Picker>
        )}
      </View>
      <View style={styles.buttons}>
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
          onPress={() => onPressNext()}
        />
      </View>
    </View>
  );
};

export default SelectCityPage;

const styles = StyleSheet.create({
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  container: { flex: 1, display: "flex", flexDirection: "column" },
  selectStateView: {
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
