import { useReducer, useRef } from "react";
import * as WebBrowser from "expo-web-browser";

const initState = {
  imageVisible: false,
  loading: true, // 默认加载状态
  previews: []
};

const reducer = (state, action) => {
  return { ...state, ...action };
};

export default function useHook() {
  const [state, dispatch] = useReducer(reducer, initState);
  const webview = useRef(null);

  // 蒙版
  const maskStyle = state.loading
    ? { opacity: 1 }
    : { left: "-100%", opacity: 0 };

  // 加载结束
  const onLoadEnd = () => {
    setTimeout(() => {
      dispatch({ loading: false });
    }, 300);
  };

  // 与 WebContent 通信
  const handleMessage = e => {
    const message = JSON.parse(e.nativeEvent.data);
    const handler = {
      preview() {
        dispatch({ imageVisible: true, previews: [{ url: message.src }] });
      }
    };

    if (handler[message.type]) {
      handler[message.type]();
    }
  };

  // 外部打开链接
  const OUTER_LINK_REG = /jsgaotie\.com/;
  const onNavigationChange = newNavState => {
    const { url } = newNavState;
    if (!OUTER_LINK_REG.test(url)) {
      webview.current.stopLoading();
      WebBrowser.openBrowserAsync(url);
    }
  };

  // 关闭图片预览
  const closeImageViewer = () => {
    dispatch({ imageVisible: false });
  };

  return {
    state,
    dispatch,
    webview,
    maskStyle,
    onLoadEnd,
    handleMessage,
    onNavigationChange,
    closeImageViewer
  };
}
