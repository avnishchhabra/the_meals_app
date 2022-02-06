import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import MealItem from "./MealItem";

const MealsList = ({ navigation, mealsToDisplay }) => {
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

export default MealsList;

const styles = StyleSheet.create({
  mealsContainer: {
    width: "100%",
    padding: 15,
  },
});
