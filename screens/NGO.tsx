import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface ngo {
  _id: string;
  name: string;
  logo: string;
  services: string[];
  information?: string;
  address?: string;
  telephones?: string[];
}

const NGO = ({ item }: { item: ngo }) => {
  return (
    <View>
      <Text>NGO , {item.name}</Text>
    </View>
  );
};

export default NGO;

const styles = StyleSheet.create({});
