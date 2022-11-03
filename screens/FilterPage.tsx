import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Chip, Searchbar } from "react-native-paper";
import LoginPageButtons from "../components/LoginPageButtons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import { FilterPageContext } from "../context/context";
// import { useRoute } from "@react-navigation/native";

const FilterPage = () => {
  const filterNavigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, "Home">>();
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
    selectLocation,
    setSelectLocation,
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
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <View style={styles.chipMain}>
        <Text style={{ marginBottom: "4%", fontSize: 22 }}>Filter By :</Text>
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
    flexDirection: "column",
  },
});
