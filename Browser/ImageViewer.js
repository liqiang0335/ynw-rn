import React from "react";
import { Modal, ActivityIndicator } from "react-native";
import ImageViewer from "react-native-image-zoom-viewer";
import { IconClose } from "./Icons";

export default function ImagesViewer({
  visible = false,
  images = [],
  index = 0,
  onClose
}) {
  return (
    <Modal visible={visible} transparent={true}>
      <IconClose onPress={onClose}></IconClose>
      <ImageViewer
        index={index}
        imageUrls={images}
        loadingRender={() => <ActivityIndicator color="white" size="small" />}
        renderIndicator={() => null}
      />
    </Modal>
  );
}
