import {
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Image,
  ScrollView,
} from "react-native";
import globalStyle from "../../assets/styles/main";
import style from "./style";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { deviceWidth } from "../../assets/styles/scaling";
import ProfileTabTitle from "../../components/ProfileTabTitle/ProfileTabTitle";
import ProfileTabPost from "../../components/ProfileTabPost/ProfileTabPost";

const ProfileTabs = createMaterialTopTabNavigator();

const Tab2 = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>This is Tab 2</Text>
    </View>
  );
};

const Tab3 = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>This is Tab 3</Text>
    </View>
  );
};

const ProfileTabNavigation = () => {
  return (
    <ProfileTabs.Navigator
      screenOptions={{
        tabBarIconStyle: { backgroundColor: "transparent" },
        tabBarStyle: {
          elevation: 0,
          zIndex: 0,
        },
      }}
    >
      <ProfileTabs.Screen
        options={{
          tabBarLabel: ({ focused }) => {
            return <ProfileTabTitle title="Photos" isFocused={focused} />;
          },
        }}
        name={"Tab1"}
        component={ProfileTabPost}
      />
      <ProfileTabs.Screen
        options={{
          tabBarLabel: ({ focused }) => {
            return <ProfileTabTitle title="Videos" isFocused={focused} />;
          },
        }}
        name={"Tab2"}
        component={ProfileTabPost}
      />
      <ProfileTabs.Screen
        options={{
          tabBarLabel: ({ focused }) => {
            return <ProfileTabTitle title="Saved" isFocused={focused} />;
          },
        }}
        name={"Tab3"}
        component={ProfileTabPost}
      />
    </ProfileTabs.Navigator>
  );
};

export default function Profile() {
  return (
    <SafeAreaView
      style={[
        globalStyle.backgroundWhite,
        globalStyle.flex,
        { height: deviceWidth },
      ]}
    >
      <StatusBar />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.profileImageContainer}>
          <View style={style.profileImageContent}>
            <Image
              style={style.profileImage}
              source={require("../../assets/images/default_profile.png")}
            />
          </View>
        </View>
        <View style={style.userNameContainer}>
          <Text style={style.userName}>Ali Purhassan</Text>
        </View>
        <View style={style.profilestatsConTainer}>
          <View style={style.singleStatsContainer}>
            <Text style={style.singleStatsNumber}>45</Text>
            <Text style={style.singleStatsText}>Following</Text>
          </View>
          <View style={[style.singleStatsContainer, style.singleStatsBorder]}>
            <Text style={style.singleStatsNumber}>30M</Text>
            <Text style={style.singleStatsText}>Following</Text>
          </View>
          <View style={style.singleStatsContainer}>
            <Text style={style.singleStatsNumber}>10</Text>
            <Text style={style.singleStatsText}>Post</Text>
          </View>
        </View>
        <View style={style.border} />
        <View style={{ height: deviceWidth * 1.2 }}>
          <ProfileTabNavigation style={{ flex: 1 }} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
