import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MealsList from "../components/MealsList";
import { MEALS } from "../data/dummy-data";

const FavouritesScreen = ({ navigation }) => {
  const mealsToDisplay = MEALS.slice(0, 2);
  return <MealsList navigation={navigation} mealsToDisplay={mealsToDisplay} />;
};

export default FavouritesScreen;

const styles = StyleSheet.create({});
