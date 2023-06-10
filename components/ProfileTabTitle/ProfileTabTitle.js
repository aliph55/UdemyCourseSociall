import { StyleSheet, Text, View } from "react-native";
import React from "react";
import style from "./style";

export default function ProfileTabTitle({ title = "", isFocused = false }) {
  return (
    <Text
      style={[
        style.title,
        {
          color: isFocused ? "#022150" : "#79869f",
          fontWeight: isFocused ? "500" : "400",
        },
      ]}
    >
      {title}
    </Text>
  );
}
