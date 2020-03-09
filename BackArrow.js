import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function BackArrow({ onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <AntDesign name="left" size={18} style={styles.arrow} />
      <Text style={styles.text}>返回</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    flexDirection: "row"
  },
  arrow: {
    fontSize: 22
  },
  text: {
    marginLeft: 2,
    fontSize: 17,
    position: "relative",
    top: -1
  }
});
