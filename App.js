import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as FONT from "expo-font";
import AppLoading from "expo-app-loading";
import { useEffect, useState } from "react";
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
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// import { createDrawerNavigator } from "@react-navigation/drawer";

// enableScreens();

const CategoryStackCreator = createNativeStackNavigator();
const FavStackCreator = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();
// const Drawer = createDrawerNavigator();
const fetchFonts = () => {
  return FONT.loadAsync({
    sansBold: require("./assets/fonts/sans_bold.ttf"),
  });
};
function CategoryStack() {
  return (
    <CategoryStackCreator.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: "white",
        // headerTitle: () => <CustomHeader />,
      }}
    >
      <CategoryStackCreator.Screen
        name="categories"
        component={CategoriesScreen}
      />
      <CategoryStackCreator.Screen
        name="category_meals"
        component={CategoryMealsScreen}
      />
      <CategoryStackCreator.Screen
        options={({ route }) => ({
          title: route.params.title,
          headerRight: () => <Text>hii</Text>,
        })}
        name="meal_details"
        component={MealDetailScreen}
      />
    </CategoryStackCreator.Navigator>
  );
}
function FavouriteStack() {
  return (
    <FavStackCreator.Navigator>
      <FavStackCreator.Screen name="Favourites" component={FavouritesScreen} />
    </FavStackCreator.Navigator>
  );
}
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

  return (
    <NavigationContainer>
      {/* <Drawer.Navigator initialRouteName="CategoryTab">
        <Drawer.Screen name="Catagories" component={CategoryTab} />
        <Drawer.Screen name="FavouritesScreen" component={CategoryStack} />
      </Drawer.Navigator> */}
      <Tab.Navigator
        activeColor="white"
        inactiveColor="gray"
        shifting={false}
        barStyle={{
          backgroundColor: colors.primary,
        }}
        // screenOptions={({ route }) => ({
        //   tabBarIcon: ({ focused, color, size }) => {
        //     let iconName;
        //     if (route.name === "Catagories") {
        //       iconName = focused
        //         ? "ios-information-circle"
        //         : "ios-information-circle-outline";
        //     } else if (route.name === "Favourites") {
        //       iconName = focused ? "ios-list-circle" : "ios-list";
        //     }
        //     return <Ionicons name={iconName} size={size} color={color} />;
        //   },
        //   // tabBarActiveTintColor: "tomato",
        //   // tabBarInactiveTintColor: "gray",
        // })}
      >
        <Tab.Screen
          options={{
            // tabBarColor: colors.primary,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
          name="Catagories"
          component={CategoryStack}
        />
        <Tab.Screen
          options={{
            // tabBarColor: colors.primary,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bell" color={color} size={26} />
            ),
          }}
          name="Favourites"
          component={FavouriteStack}
        />
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
