import Button from "../components/Button";
import { Formik } from "formik";
import { MAIN_BACKGROUND_COLOR, MAIN_BUTTON_COLOR, SHADOW } from "../theme";
import OneLineInput from "../components/OneLineInput";
import { View, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";

const LoginPage = () => {
  const onPressLogin = () => {
    console.log("login clicked!");
  };
  const onPressForgotPassword = () => {
    console.log("forgot password clicked");
  };
  return (
    <ScrollView style={styles.container}>
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MAIN_BACKGROUND_COLOR,
    flexDirection: "column",
    // justifyContent: "center",
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
    width: "100%",
    height: "100%",
    borderWidth: 6,
    borderColor: "#B7ADCF",
    borderRadius: 200,
  },
  logoView: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    width: 220,
    height: 220,
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 2,
  },
});

export default LoginPage;
