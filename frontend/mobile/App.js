import React from "react";
import { StatusBar, LogBox } from "react-native";
import Routes from "./src/routes";

export default function App() {
  return (
    <>
      <Routes />
      <StatusBar barStyle="light-content" backgroundColor="#27AE60" />
    </>
  );
}
