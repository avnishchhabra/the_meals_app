import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const GridItem = ({ navigation, title, color, style, onPress }) => {
  return (
    <TouchableOpacity
      style={{ ...styles.gridItem, backgroundColor: color }}
      onPress={onPress}
    >
      <Text style={styles.itemText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default GridItem;

const styles = StyleSheet.create({
  gridItem: {
    backgroundColor: "red",
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 15,
    padding: 20,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    elevation: 10,
  },
  itemText: {
    fontSize: 19,
  },
});
