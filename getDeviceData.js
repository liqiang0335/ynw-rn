import { Platform } from "react-native";
import * as Device from "expo-device";
import Constants from "expo-constants";

const { brand, osVersion, deviceName, modelName } = Device;
const { sessionId } = Constants;

const info = {
  brand,
  os: Platform.OS,
  osversion: osVersion,
  deviceName,
  modelName,
  sessionId
};

export default info;
