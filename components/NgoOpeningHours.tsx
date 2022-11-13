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
    // <DataTable style={styles.table} key={"data table"} accessibilityViewIsModal>
    //   <DataTable.Header>
    //     {openingHours.map((oh) => (
    //       <DataTable.Title key={oh.day}>{oh.day}</DataTable.Title>
    //     ))}
    //   </DataTable.Header>
    //   <DataTable.Row>
    //     {openingHours.map((oh) => (
    //       <DataTable.Cell key={oh.day + oh.hours}>{oh.hours}</DataTable.Cell>
    //     ))}
    //   </DataTable.Row>
    // </DataTable>

    <View style={{ width: "90%", marginLeft: 15 }}>
      {openingHours.map((oh) => (
        <View
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Text
            variant="titleMedium"
            style={{
              width: 140,
              display: "flex",
              justifyContent: "center",
              right: 0,
            }}
            key={oh.day}
          >
            {oh.day}
          </Text>
          <Text
            variant="titleMedium"
            style={{
              // marginLeft: 20,
              fontWeight: "bold",
              display: "flex",
              justifyContent: "center",
              // width: "50%",
            }}
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

const styles = StyleSheet.create({});
