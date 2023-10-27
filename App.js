import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";

import NewMeeting from "./src/screens/NewMeeting";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="transparent" translucent />
      <NewMeeting />
    </NavigationContainer>
  );
}
