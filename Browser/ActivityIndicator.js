import React from "react";
import { View, Image, StyleSheet } from "react-native";

export default function ActivityIndicatorBox() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/loading.png")}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black"
  },
  image: {
    width: 200,
    height: 200
  }
});
