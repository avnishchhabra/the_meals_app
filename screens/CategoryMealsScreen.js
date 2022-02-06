import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import MealsList from "../components/MealsList";

const CategoryMealsScreen = ({ route, navigation }) => {
  const params = route.params;
  const catTitle = params.title;
  const catId = params.id;
  const mealsToDisplay = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );
  return <MealsList mealsToDisplay={mealsToDisplay} navigation={navigation} />;
};

export default CategoryMealsScreen;

const styles = StyleSheet.create({});
