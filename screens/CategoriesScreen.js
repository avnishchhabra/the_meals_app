import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  FlatList,
} from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummy-data";

const gridItem = (itemData) => {
  return (
    <View style={styles.gridItem}>
      <Text>{itemData.item.title}</Text>
    </View>
  );
};

const CategoriesScreen = ({ navigation }) => {
  return <FlatList numColumns={2} data={CATEGORIES} renderItem={gridItem} />;
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  gridItem: {
    backgroundColor: "red",
    flex: 1,
    margin: 15,
    height: 150,
  },
});
