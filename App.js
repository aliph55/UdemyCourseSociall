import "react-native-gesture-handler";
import Home from "./screens/Home/Home";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./navigation/MainNavigation";

const App = () => {
  //All of the items in our stories

  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
};

export default App;
