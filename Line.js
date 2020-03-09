import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";
/**
 * Line
 * @param {Object} style
 * @param {String} title
 * @param {Function,Optinal} children
 */
export default function Line(props) {
  const { title, children, onPress, bg = "white", color = "black" } = props;

  return (
    <TouchableOpacity
      style={[styles.item, { backgroundColor: bg }]}
      onPress={() => onPress && onPress()}
    >
      <Text style={[styles.text, { color }]}>{title}</Text>
      <View style={{ flex: 1 }} />
      {children || <IconArrow color={color} />}
    </TouchableOpacity>
  );
}

function IconArrow({ color = "#666" }) {
  return <Entypo name="chevron-thin-right" size={16} color={color} />;
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 12,
    marginBottom: 1
  },
  text: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 16
  }
});
