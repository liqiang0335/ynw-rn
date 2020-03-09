import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export function IconClose({ onPress, ...rest }) {
  return (
    <TouchableOpacity style={styles.close} onPress={onPress}>
      <AntDesign name="closecircle" color="white" size={25} {...rest} />
    </TouchableOpacity>
  );
}

export const styles = StyleSheet.create({
  close: {
    position: "absolute",
    right: 15,
    top: 20,
    zIndex: 10000
  }
});
