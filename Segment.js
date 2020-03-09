import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Platform
} from "react-native";
const ios = Platform.OS === "ios";

/**
 * 切换组件
 * @param {Array<String>} data - 数据
 * @param {Function} onChange - 回调
 * @param {String, Optional} color - 颜色
 * @param {Number, Optional} height - 高度
 * @param {Number, Optional} width - 宽度
 * @param {Number, Optional} initActive - 选中索引
 */
export default function Segment(props) {
  const {
    data,
    onChange,
    color = "#db8504",
    bg = "black",
    height = 26,
    width = 80,
    initActive = 0,
    offset = 0
  } = props;
  const [active, setActive] = useState(initActive);

  const activeViewStyle = index => {
    return { backgroundColor: active == index ? color : bg };
  };

  const activeTextStyle = index => {
    return { color: active == index ? bg : color };
  };

  const onPress = (item, i) => {
    setActive(i);
    if (typeof onChange === "function") {
      onChange(item, i);
    }
  };

  const offStyle = ios ? { left: 0 } : { left: 0 - offset };

  return (
    <View style={[styles.container, offStyle]}>
      {data.map((item, i) => (
        <TouchableWithoutFeedback onPress={() => onPress(item, i)} key={i}>
          <View
            style={[
              styles.item,
              styles["item" + i],
              { borderColor: color, width, height },
              activeViewStyle(i)
            ]}
          >
            <Text style={[{ color }, activeTextStyle(i)]}>{item}</Text>
          </View>
        </TouchableWithoutFeedback>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "relative"
  },
  item: {
    borderWidth: 1,
    borderLeftWidth: 0,
    justifyContent: "center",
    alignItems: "center"
  },
  item0: {
    borderLeftWidth: 1
  }
});
