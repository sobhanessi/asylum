import { Chip, Searchbar } from "react-native-paper";
import { AppContext } from "../context/context";
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
const LookingFor = () => {
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
    // selectCounselor,
    // setSelectCounselor,
    selectCity,
    setSelectCity,
    selectVocationalTraining,
    setSelectVocationalTraining,
    selectInterpreter,
    setSelectInterpreter,
    selectDoctor,
    setSelectDoctor,
    selectLanguageCourses,
    setSelectLanguageCourses,
    selectSports,
    setSelectSports,
  } = React.useContext(AppContext);

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
        <Text variant="headlineSmall" style={styles.titleText} key="titleText">
          Search By Name Of Organization :
        </Text>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={{ backgroundColor: "white", borderRadius: 15 }}
        />
      </View>

      <View style={styles.chipMain}>
        <Text variant="headlineSmall" style={styles.titleText} key="titleText3">
          Filter By :
        </Text>
        <View style={styles.chipRow}>
          <Chip
            style={styles.chip}
            mode="outlined"
            onPress={() => setSelectLawyer(!selectLawyer)}
            selected={selectLawyer}
            // compact
            key="counselor"
            icon="account-tie"
            showSelectedOverlay={true}
          >
            Counselor / Lawyer
          </Chip>
          <Chip
            style={styles.chip}
            mode="outlined"
            onPress={() =>
              setSelectVocationalTraining(!selectVocationalTraining)
            }
            selected={selectLawyer}
            // compact
            key="vocational training"
            icon="account-hard-hat"
            showSelectedOverlay={true}
          >
            Vocational Training
          </Chip>
        </View>
        <View style={styles.chipRow}>
          <Chip
            style={styles.chip}
            mode="outlined"
            onPress={() => setSelectPsychologist(!selectPsychologist)}
            selected={selectPsychologist}
            compact
            key="psychologist"
            icon="head-cog"
            showSelectedOverlay={true}
          >
            Psychologist
          </Chip>
          <Chip
            style={styles.chip}
            mode="outlined"
            onPress={() => setSelectSocialWorker(!selectSocialWorker)}
            selected={selectSocialWorker}
            compact
            key="socialWorker"
            icon="account"
            showSelectedOverlay={true}
          >
            Social Worker
          </Chip>
        </View>
        <View style={styles.chipRow}>
          <Chip
            style={styles.chip}
            mode="outlined"
            onPress={() => setSelectInterpreter(!selectInterpreter)}
            selected={selectInterpreter}
            compact
            key="interpreter"
            icon="account-voice"
            showSelectedOverlay={true}
          >
            Interpreter
          </Chip>
          <Chip
            style={styles.chip}
            mode="outlined"
            onPress={() => setSelectDoctor(!selectDoctor)}
            selected={selectDoctor}
            compact
            key="doctor"
            icon="doctor"
            showSelectedOverlay={true}
          >
            Doctor
          </Chip>
        </View>
        <View style={styles.chipRow}>
          <Chip
            style={styles.chip}
            mode="outlined"
            onPress={() => setSelectLanguageCourses(!selectLanguageCourses)}
            selected={selectLanguageCourses}
            compact
            key="language courses"
            icon="translate"
            showSelectedOverlay={true}
          >
            Language Courses
          </Chip>
          <Chip
            style={styles.chip}
            mode="outlined"
            onPress={() => setSelectSports(!selectSports)}
            selected={selectSports}
            compact
            key="sports"
            icon="weight-lifter"
            showSelectedOverlay={true}

            // closeIcon="close"
            // onClose={() => {
            //   setSelectSports(!selectSports);
            // }}
          >
            Sports
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
                  // counselor: selectCounselor,
                  lawyer: selectLawyer,
                  psychologist: selectPsychologist,
                  socialWorker: selectSocialWorker,
                  location: selectCity,
                  vocationalTraining: selectVocationalTraining,
                  interpreter: selectInterpreter,
                  doctor: selectDoctor,
                  languageCourses: selectLanguageCourses,
                  sports: selectSports,
                },
              })
            }
          />
        </View>
      </View>
    </View>
  );
};

export default LookingFor;

const styles = StyleSheet.create({
  chip: {
    marginBottom: "4%",
    maxWidth: 200,
    // marginRight: 10,
    display: "flex",
    justifyContent: "center",
  },
  chipMain: {
    width: "80%",
    marginRight: "10%",
    marginLeft: "10%",
  },
  chipRow: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  titleText: {
    marginBottom: "5%",
    fontWeight: "bold",
  },
});
