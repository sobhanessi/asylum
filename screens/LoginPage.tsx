import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Button from "../components/Button";

const LoginPage = () => {
  const onPressLogin = () => {
    console.log("login clicked!");
  };
  const onPressForgotPassword = () => {
    console.log("forgot password clicked");
  };
  return (
    <View style={styles.container}>
      <Text>Login Page</Text>
      <Button
        text="Login"
        onPress={onPressLogin}
        textStyle={styles.text}
        buttonStyle={styles.loginButton}
      />
      <Button
        text="FogotPassword"
        onPress={onPressForgotPassword}
        textStyle={styles.text}
        buttonStyle={styles.forgotPasswordButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#70A288",
  },

  forgotPasswordButton: {
    backgroundColor: "#04395E",
  },
  loginButton: {
    backgroundColor: "#04395E",
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default LoginPage;
