import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const CategoryMealsScreen = ({ route, navigation }) => {
  const params = route.params;
  const catTitle = params.title;
  const catId = params.id;
  const mealsToDisplay = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );
  return (
    <FlatList
      data={mealsToDisplay}
      renderItem={(itemData) => (
        <MealItem
          duration={itemData.item.duration}
          complexity={itemData.item.complexity}
          affordability={itemData.item.affordability}
          imageUrl={itemData.item.imageUrl}
          title={itemData.item.title}
          onPress={() =>
            navigation.navigate("meal_details", {
              mealId: itemData.item.id,
              title: itemData.item.title,
            })
          }
        />
      )}
      contentContainerStyle={styles.mealsContainer}
    />
  );
};

export default CategoryMealsScreen;

const styles = StyleSheet.create({
  mealsContainer: {
    width: "100%",
    padding: 15,
  },
});
