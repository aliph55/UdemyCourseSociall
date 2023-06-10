import { StyleSheet, Image, View, ScrollView } from "react-native";
import style from "./srtle";

export default function ProfileTabPost() {
  return (
    <ScrollView style={style.profileTabPostContainer}>
      <View style={style.imageContainer}>
        <Image
          resizeMode="contain"
          style={style.image}
          source={require("../../assets/images/default_post.png")}
        />
        <Image
          resizeMode="contain"
          style={style.image}
          source={require("../../assets/images/default_post.png")}
        />
      </View>
      <View style={[style.imageContainer, style.imageUpcomingRowsContainer]}>
        <Image
          resizeMode="contain"
          style={style.image}
          source={require("../../assets/images/default_post.png")}
        />
        <Image
          resizeMode="contain"
          style={style.image}
          source={require("../../assets/images/default_post.png")}
        />
      </View>
      <View
        style={[
          style.imageContainer,
          style.imageUpcomingRowsContainer,
          style.lastImageContainer,
        ]}
      >
        <Image
          resizeMode="contain"
          style={style.image}
          source={require("../../assets/images/default_post.png")}
        />
        <Image
          resizeMode="contain"
          style={style.image}
          source={require("../../assets/images/default_post.png")}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
