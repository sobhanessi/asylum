import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Button from "../components/Button";
import OneLineInput from "../components/OneLineInput";
import { Formik } from "formik";

const LoginPage = () => {
  const onPressLogin = () => {
    console.log("login clicked!");
  };
  const onPressForgotPassword = () => {
    console.log("forgot password clicked");
  };
  return (
    <View style={styles.container}>
      {/* <Text>Login Page</Text> */}
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <OneLineInput
              onChange={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              style={styles.loginInput}
              placeholder="Your Email"
              keyboardType="email-address"
            />
            <OneLineInput
              onChange={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              style={styles.loginInput}
              secureTextEntry={true}
              placeholder="Your Password"
              keyboardType="default"
            />
            <Button
              text="Login"
              onPress={handleSubmit}
              textStyle={styles.text}
              buttonStyle={styles.loginButton}
            />
          </View>
        )}
      </Formik>
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
    flexDirection: "column",
  },

  forgotPasswordButton: {
    backgroundColor: "#04395E",
  },
  loginButton: {
    backgroundColor: "#04395E",
  },

  loginInput: {},
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default LoginPage;
