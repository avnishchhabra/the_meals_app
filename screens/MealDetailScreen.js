import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MealDetailScreen = ({ route }) => {
  const { mealId, title } = route.params;
  return (
    <View>
      <Text>MealDetailScreen</Text>
    </View>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({});
