import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Chip, Searchbar } from "react-native-paper";
// import { useRoute } from "@react-navigation/native";

const FilterPage = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query: string) => setSearchQuery(query);
  const [selectPsychologist, setSelectPsychologist] = React.useState(false);
  const [selectSocialWorker, setSelectSocialWorker] = React.useState(false);
  const [selectLawyer, setSelectLawyer] = React.useState(false);
  const [selectCounselor, setSelectCounselor] = React.useState(false);

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
      </View>
    </View>
  );
};

export default FilterPage;

const styles = StyleSheet.create({
  chip: { width: 150, marginBottom: "3%" },
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
});
