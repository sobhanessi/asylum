import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

interface props {
  buttonStyle: object;
  textStyle: object;
  text: string;
  onPress: any;
}

const Button = ({ buttonStyle, textStyle, text, onPress }: props) => {
  return (
    <View style={styles.container}>
      <Pressable style={[buttonStyle, styles.button]} onPress={onPress}>
        <Text style={textStyle}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: "75%",
    borderRadius: 15,
    height: 50,
    marginVertical: 5,
    // borderWidth: 3,
    // borderColor: "white",
    elevation: 20,
  },
  container: {},
});
