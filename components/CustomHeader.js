import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CustomHeader = () => {
  return (
    <View>
      <Text style={styles.txt}>Custom Header</Text>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  txt: {
    color: "white",
    fontSize: 18,
  },
});
