import { Button } from "react-native-paper";
import React from "react";
import { SHADOW } from "../theme";
import { StyleSheet, Text, View } from "react-native";

interface props {
  buttonStyle: object;
  textStyle: object;
  text: string;
  icon?: string;
  onPress: any;
}

const LoginPageButtons = ({
  buttonStyle,
  textStyle,
  text,
  onPress,
  icon = "",
}: props) => {
  return (
    <View style={styles.container}>
      <Button
        mode="contained-tonal"
        style={[buttonStyle, styles.button]}
        onPress={onPress}
        icon={icon}
      >
        <Text style={textStyle}>{text}</Text>
      </Button>
    </View>
  );
};

export default LoginPageButtons;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    // width: "75%",
    borderRadius: 15,
    height: 50,
    marginVertical: 5,
    ...SHADOW,
  },
  container: {},
});
