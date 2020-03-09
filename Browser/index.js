import React from "react";
import { StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";
import ImageViewer from "./ImageViewer";
import useLogic from "./useLogic";
import ActivityIndicator from "./ActivityIndicator";

/**
 * 浏览器
 * @param {String} uri - 链接地址
 */
export default function Browser({ uri }) {
  const {
    state,
    webview,
    maskStyle,
    onLoadEnd,
    handleMessage,
    onNavigationChange,
    closeImageViewer
  } = useLogic();

  return (
    <View style={styles.container}>
      <ImageViewer
        visible={state.imageVisible}
        onClose={closeImageViewer}
        images={state.previews}
      />
      <View style={[styles.mask, maskStyle]}>
        <ActivityIndicator />
      </View>
      <WebView
        ref={webview}
        on={onLoadEnd}
        onLoadEnd={onLoadEnd}
        source={{ uri }}
        javaScriptEnabled={true}
        useWebKit={true}
        onMessage={handleMessage}
        onNavigationStateChange={onNavigationChange}
        style={{ backgroundColor: "black" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "black" },
  mask: {
    flex: 1,
    left: 0,
    position: "absolute",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
    backgroundColor: "black"
  }
});
