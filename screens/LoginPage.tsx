import { View, StyleSheet, Image } from "react-native";
import React from "react";
import Button from "../components/Button";
import OneLineInput from "../components/OneLineInput";
import { Formik } from "formik";
import { MAIN_BACKGROUND_COLOR, MAIN_BUTTON_COLOR, SHADOW } from "../theme";

const LoginPage = () => {
  const onPressLogin = () => {
    console.log("login clicked!");
  };
  const onPressForgotPassword = () => {
    console.log("forgot password clicked");
  };
  return (
    <View style={styles.container}>
      <View style={styles.logoView}>
        <Image
          source={require("../assets/logo.png")}
          style={styles.logoImage}
        />
      </View>
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
        text="Fogot Password ?"
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
    backgroundColor: MAIN_BACKGROUND_COLOR,
    flexDirection: "column",
    justifyContent: "center",
  },

  forgotPasswordButton: {
    backgroundColor: MAIN_BUTTON_COLOR,
  },
  loginButton: {
    backgroundColor: MAIN_BUTTON_COLOR,
    // shadowColor: "#171717",
  },

  loginInput: {},
  logoImage: {
    ...SHADOW,
    borderWidth: 6,
    borderColor: "#B7ADCF",
    borderRadius: 200,
  },
  logoView: {
    alignSelf: "center",
    margin: 10,
    ...SHADOW,
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 2,
  },
});

export default LoginPage;
