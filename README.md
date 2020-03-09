# 文档

## getDeviceData

获取设备信息

```js
import getDeviceData from "ynw-rn/getDeviceData";
const device = getDeviceData();
```

## BackArrow

返回组件

```js
import BackArrow from "ynw-rn/BackArrow";

Article.navigationOptions = ({ navigation }) => {
  return {
    headerLeft: () => <BackArrow onPress={() => navigation.goBack()} />
  };
};
```

## Segment

切换组件

```js
import Segment from "ynw-rn/Segment";

Article.navigationOptions = ({ navigation }) => {
  const { segType } = store.getState();
  return {
    headerTitle: () => (
      <Segment
        data={["原文", "译文"]}
        width={70}
        color="red"
        onChange={(text, i) =>
          store.dispatch({ type: Types.SEG_TYPE, payload: i })
        }
        initActive={segType}
        offset={35}
      />
    )
  };
};
```

## useUpdater

```js
import React from "react";
import useObservable from "ynw/react/useObservable";
import { updater$ } from "ynw-rn/useUpdater";
import { Text, View } from "react-native";

export default function UpdateViewer() {
  const updater = useObservable(updater$, { message: "" });
  return (
    <View>
      <Text>数据更新:{updater.message}</Text>
    </View>
  );
}
```

```js
import useUpdater from "ynw-rn/useUpdater";

function App() {
  useUpdater();
  return <AppNavigator />;
}
```
