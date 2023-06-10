import { StyleSheet } from "react-native";
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from "../../assets/styles/scaling";

const style = StyleSheet.create({
  name: {
    fontWeight: "500",
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(19),
  },
  location: {
    fontWeight: "400",
    fontSize: scaleFontSize(12),
    lineHeight: scaleFontSize(15),
    paddingTop: verticalScale(5),
    color: "#79869F",
  },
  userInformation: {
    flexDirection: "row",
    alignItems: "center",
  },
  userPostInformation: {
    marginLeft: horizontalScale(10),
  },
  userInformationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  userPostContainer: {
    borderBottomWidth: 1,
    borderColor: "#EFF2F6",
    // backgroundColor: "red",
    maxWidth: 300,
  },
  userPostStatText: {
    color: "#79869F",
  },
  post: {
    justifyContent: "center",
    flexDirection: "row",
    marginVertical: verticalScale(16),
  },
  userPostStats: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: verticalScale(30),
    paddingHorizontal: horizontalScale(10),
  },
  userPostStatButton: {
    marginRight: horizontalScale(27),
    flexDirection: "row",
  },
  userPostStatIcon: {
    marginRight: horizontalScale(3),
    color: "#79869F",
  },
});

export default style;
