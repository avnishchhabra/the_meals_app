import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const MealItem = ({
  title,
  onPress,
  duration,
  complexity,
  affordability,
  imageUrl,
}) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.upperContainer}>
          <ImageBackground style={styles.bgImage} source={{ uri: imageUrl }}>
            <Text style={styles.tipText}>{title}</Text>
          </ImageBackground>
        </View>
        <View style={styles.belowContainer}>
          <Text>{duration}m</Text>
          <Text>{complexity.toUpperCase()}</Text>
          <Text>{affordability.toUpperCase()}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#f9f9f9",
    borderRadius: 15,
    overflow: "hidden",
  },
  tipText: {
    padding: 6,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    color: "white",
    textAlign: "center",
  },
  upperContainer: {
    height: "85%",
  },
  belowContainer: {
    flexDirection: "row",
    height: "15%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 5,
  },
  bgImage: {
    height: "100%",
    width: "100%",
    justifyContent: "flex-end",
  },
});
