import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";

interface props {
  buttonStyle: Object;
  textStyle: Object;
  text: String;
  onPress: any;
}

const Button = ({ buttonStyle, textStyle, text, onPress }: props) => {
  return (
    <Pressable style={[buttonStyle, styles.button]} onPress={onPress}>
      <Text style={textStyle}>{text}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: 260,
    borderRadius: 15,
    height: 50,
    marginVertical: 5,
    // borderWidth: 3,
    // borderColor: "white",
  },
});
