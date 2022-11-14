import { StyleSheet, View } from "react-native";
import React from "react";
import { DataTable, Text } from "react-native-paper";
import { openingHours } from "../types";

const NgoOpeningHours = ({
  openingHours,
}: {
  openingHours: openingHours[];
}) => {
  return (
    <View style={styles.container}>
      {openingHours.map((oh) => (
        <View style={styles.flex}>
          <Text variant="titleMedium" style={styles.days} key={oh.day}>
            {oh.day}
          </Text>
          <Text
            variant="titleMedium"
            style={styles.hours}
            key={oh.hours + openingHours.indexOf(oh)}
          >
            {oh.hours}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default NgoOpeningHours;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    marginRight: "5%",
    marginLeft: "5%",
  },
  days: {
    width: 140,
    display: "flex",
    justifyContent: "center",
    right: 0,
  },
  flex: {
    display: "flex",
    flexDirection: "row",
  },
  hours: {
    // marginLeft: 20,
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    // width: "50%",
  },
});
