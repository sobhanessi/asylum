import { Chip, Searchbar } from "react-native-paper";
import { FilterPageContext } from "../context/context";
import germanCities from "../database/germanyCities.json";
import LoginPageButtons from "../components/LoginPageButtons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Picker } from "@react-native-picker/picker";
import React from "react";
import { RootStackParamList } from "../types";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
// import { useRoute } from "@react-navigation/native";

// todo : 1. add 'near me'
const FilterPage = () => {
  const filterNavigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, "Main">>();
  const {
    searchQuery,
    onChangeSearch,
    selectPsychologist,
    setSelectPsychologist,
    selectSocialWorker,
    setSelectSocialWorker,
    selectLawyer,
    setSelectLawyer,
    selectCounselor,
    setSelectCounselor,
    selectCity,
    setSelectCity,
  } = React.useContext(FilterPageContext);

  return (
    <View>
      <View
        style={{
          width: "80%",
          marginRight: "10%",
          marginLeft: "10%",
          marginTop: "5%",
          marginBottom: "5%",
        }}
      >
        <Text variant="headlineSmall" style={styles.titleText}>
          Search By Name Of Organization :
        </Text>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={{ backgroundColor: "white", borderRadius: 15 }}
        />
      </View>

      <View
        style={{
          width: "80%",
          marginRight: "10%",
          marginLeft: "10%",
          marginTop: "5%",
          marginBottom: "5%",
          borderRadius: 15,
        }}
      >
        <Text variant="headlineSmall" style={styles.titleText}>
          Select Your City :
        </Text>
        <Picker
          selectedValue={selectCity}
          onValueChange={(itemValue, itemIndex) => setSelectCity(itemValue)}
          style={{
            backgroundColor: "white",
            borderRadius: 15,
          }}
        >
          <Picker.Item label="Select A City" value="" />
          {germanCities.map((city) => (
            <Picker.Item label={city.name} value={city.name} />
          ))}
        </Picker>
      </View>

      <View style={styles.chipMain}>
        <Text variant="headlineSmall" style={styles.titleText}>
          Filter By :
        </Text>
        <View style={styles.chipRow}>
          <Chip
            style={styles.chip}
            mode="outlined"
            onPress={() => setSelectCounselor(!selectCounselor)}
            selected={selectCounselor}
            compact
          >
            Counselor
          </Chip>
          <Chip
            style={styles.chip}
            mode="outlined"
            onPress={() => setSelectLawyer(!selectLawyer)}
            selected={selectLawyer}
            compact
          >
            Lawyer
          </Chip>
        </View>
        <View style={styles.chipRow}>
          <Chip
            style={styles.chip}
            mode="outlined"
            onPress={() => setSelectPsychologist(!selectPsychologist)}
            selected={selectPsychologist}
            compact
          >
            Psychologist
          </Chip>
          <Chip
            style={styles.chip}
            mode="outlined"
            onPress={() => setSelectSocialWorker(!selectSocialWorker)}
            selected={selectSocialWorker}
            compact
          >
            Social Worker
          </Chip>
        </View>
        <View>
          <LoginPageButtons
            text="Done"
            textStyle={{
              fontStyle: "bold",
              fontSize: 20,
            }}
            buttonStyle={{ marginTop: "5%", marginBottom: "5%" }}
            onPress={() =>
              filterNavigation.navigate("Main", {
                screen: "Home",
                filter: {
                  name: searchQuery,
                  counselor: selectCounselor,
                  lawyer: selectLawyer,
                  psychologist: selectPsychologist,
                  socialWorker: selectSocialWorker,
                  location: selectCity,
                },
              })
            }
          />
        </View>
      </View>
    </View>
  );
};

export default FilterPage;

const styles = StyleSheet.create({
  chip: { width: 150, marginBottom: "4%" },
  chipMain: {
    width: "80%",
    marginRight: "10%",
    marginLeft: "10%",
  },
  chipRow: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  titleText: {
    marginBottom: "5%",
    fontWeight: "bold",
  },
});
