import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import React from "react";

const CategoriesScreen = ({ navigation }) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("category_meals")}
    >
      <View>
        <Text>CategoriesScreen</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
