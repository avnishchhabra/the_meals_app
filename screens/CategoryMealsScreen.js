import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CategoryMealsScreen = ({ route }) => {
  const params = route.params;
  return (
    <View>
      <Text>{params.category}</Text>
    </View>
  );
};

export default CategoryMealsScreen;

const styles = StyleSheet.create({});
