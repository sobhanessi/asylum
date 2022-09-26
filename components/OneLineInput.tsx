import { KeyboardTypeOptions, StyleSheet, TextInput, View } from "react-native";
import React from "react";

interface props {
  onChange: any;
  value: any;
  onBlur: any;
  style: object;
  placeholder: string;
  keyboardType: KeyboardTypeOptions;
  secureTextEntry?: boolean;
}

const OneLineInput = ({
  onChange,
  value,
  onBlur,
  style,
  placeholder = "",
  keyboardType = "default",
  secureTextEntry = false,
}: props) => {
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={onChange}
        value={value}
        onBlur={onBlur}
        style={[styles.input, style]}
        placeholder={placeholder}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default OneLineInput;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  input: {
    display: "flex",
    height: 60,
    alignSelf: "center",
    justifyContent: "center",
    paddingLeft: 10,
    width: "75%",
    marginVertical: 5,
    backgroundColor: "white",
    borderRadius: 15,
    fontSize: 18,
    fontWeight: "bold",
    color: "#04395E",
    elevation: 20,
    letterSpacing: 2,
  },
});
