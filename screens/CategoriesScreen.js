import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import GridItem from "../components/GridItem";

const CategoriesScreen = ({ navigation }) => {
  const gridItem = ({ item }) => {
    return (
      <GridItem
        onPress={() =>
          navigation.navigate("category_meals", {
            category: item.title,
          })
        }
        title={item.title}
        color={item.color}
      />
    );
  };
  return <FlatList numColumns={2} data={CATEGORIES} renderItem={gridItem} />;
};
export default CategoriesScreen;

const styles = StyleSheet.create({});
