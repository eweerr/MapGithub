import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Main from "./pages/Main";
import Profile from "./pages/Profile";
import Session from "./pages/Session";

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main: {
        screen: Main,
        navigationOptions: {
          title: "Map of Users",
        },
      },
      Profile: {
        screen: Profile,
        navigationOptions: {
          title: "User area",
        },
      },
    },
    {
      defaultNavigationOptions: {
        headerTintColor: "#fff",
        headerStyle: {
          backgroundColor: "#27AE60",
        },
        headerTitleAlign: "center",
      },
    }
  )
);

export default Routes;

/**
 * Session: {
        screen: Session,
        navigationOptions: {
          headerShown: false,
        },
      },
 */
