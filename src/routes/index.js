import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Meetings from "";
import Contacts from "";
import Configuration from "";

const Tab = createBottomTabNavigator();
const tabIcons = {
  Reunioes: "home",
  Contatos: "list",
  Configuracao: "call",
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            const iconName = tabIcons[route.name];
            return <Ionicons name={iconName} color={color} size={size} />;
          },
          tabBarActiveTintColor: "gray",
          tabBarInactiveTintColor: "white",
        })}
      >
        <Tab.Screen name="Reunioes" component={Meetings} />
        <Tab.Screen name="Contatos" component={Contacts} />
        <Tab.Screen name="Configuracao" component={Configuration} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
