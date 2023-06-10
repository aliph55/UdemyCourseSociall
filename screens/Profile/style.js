import { StyleSheet } from "react-native";
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from "../../assets/styles/scaling";

const style = StyleSheet.create({
  profileImageContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: verticalScale(32),
  },
  profileImageContent: {
    borderWidth: 1,
    borderRadius: horizontalScale(120),
    padding: horizontalScale(4),
    borderColor: "#0150ec",
  },
  profileImage: {
    width: horizontalScale(120),
    height: horizontalScale(120),
  },
  userName: {
    fontWeight: "600",
    fontSize: scaleFontSize(20),
    lineHeight: scaleFontSize(24),
    color: "#022150",
  },
  userNameContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: verticalScale(20),
  },
  profilestatsConTainer: {
    marginHorizontal: horizontalScale(24),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  singleStatsContainer: {
    paddingHorizontal: horizontalScale(18),
    alignItems: "center",
    paddingVertical: verticalScale(10),
  },
  singleStatsBorder: {
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: "#e9eff1",
  },
  singleStatsNumber: {
    fontWeight: "600",
    fontSize: scaleFontSize(20),
    lineHeight: scaleFontSize(24),
    color: "#022150",
  },
  singleStatsText: {
    fontWeight: "400",
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(19),
    color: "#79869f",
  },
  border: {
    borderTopWidth: 1,
    borderColor: "#efe2f6",
    marginVertical: verticalScale(16),
    marginHorizontal: horizontalScale(28),
  },
});

export default style;
