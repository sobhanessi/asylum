import { KeyboardTypeOptions, StyleSheet, View } from "react-native";
import { MAIN_BUTTON_COLOR, SHADOW } from "../theme";
import React from "react";
import { TextInput } from "react-native-paper";

interface props {
  onChange: any;
  value: any;
  onBlur: any;
  style: object;
  // placeholder: string;
  keyboardType: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  label: string;
}

const OneLineInput = ({
  onChange,
  value,
  onBlur,
  style,
  // placeholder = "",
  keyboardType = "default",
  secureTextEntry = false,
  label = "",
}: props) => {
  return (
    <View>
      <TextInput
        onChangeText={onChange}
        value={value}
        onBlur={onBlur}
        style={[styles.input, style]}
        // placeholder={placeholder}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        mode="outlined"
        label={label}
      />
    </View>
  );
};

export default OneLineInput;

const styles = StyleSheet.create({
  container: {},
  input: {
    height: 60,
    alignSelf: "center",
    justifyContent: "center",
    paddingLeft: 10,
    width: "75%",
    marginVertical: 5,
    backgroundColor: "white",
    borderRadius: 25,
    fontSize: 18,
    fontWeight: "bold",
    // color: MAIN_BUTTON_COLOR,
    letterSpacing: 2,
    ...SHADOW,
  },
});
