import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
// color palette.
export const MAIN_BUTTON_COLOR = "#535657";
export const MAIN_BACKGROUND_COLOR = "#DEE7E7";
export const MAIN_BOTTOM_NAVIGATION_COLOR = "DEE7E7";

// shadow box for boxes in the app.
export const SHADOW = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 12,
  },
  shadowOpacity: 0.58,
  shadowRadius: 16.0,

  elevation: 24,
};

// screen option for top navigation bar.
export const SCREEN_OPTION: BottomTabNavigationOptions = {
  headerStyle: {
    backgroundColor: MAIN_BACKGROUND_COLOR,
  },
  headerTintColor: MAIN_BUTTON_COLOR,
  headerTitleStyle: {
    fontWeight: "bold",
  },
};
