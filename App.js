import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as FONT from "expo-font";
import AppLoading from "expo-app-loading";
import { useState } from "react";
import CategoriesScreen from "./screens/CategoriesScreen";
import CategoryMealsScreen from "./screens/CategoryMealsScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavouritesScreen from "./screens/FavouritesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CustomHeader from "./components/CustomHeader";
import colors from "./constants/colors";
import { enableScreens } from "react-native-screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

enableScreens();

const Stack = createNativeStackNavigator();
const fetchFonts = () => {
  return FONT.loadAsync({
    sansBold: require("./assets/fonts/sans_bold.ttf"),
  });
};
export default function App() {
  const [appLoaded, setAppLoaded] = useState(false);
  if (!appLoaded) {
    return (
      <AppLoading
        onError={() => console.log("error")}
        startAsync={fetchFonts}
        onFinish={() => setAppLoaded(true)}
      />
    );
  }
  const CategoryTab = () => (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: "white",
        // headerTitle: () => <CustomHeader />,
      }}
    >
      <Stack.Screen name="categories" component={CategoriesScreen} />
      <Stack.Screen name="category_meals" component={CategoryMealsScreen} />
      <Stack.Screen
        options={({ route }) => ({
          title: route.params.title,
          headerRight: () => <Text>hii</Text>,
        })}
        name="meal_details"
        component={MealDetailScreen}
      />
    </Stack.Navigator>
  );
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Catagories") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
            } else if (route.name === "Favourites") {
              iconName = focused ? "ios-list-circle" : "ios-list";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Catagories" component={CategoryTab} />
        <Tab.Screen name="Favourites" component={FavouritesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
