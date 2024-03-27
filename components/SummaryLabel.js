import React from "react";
import { Text, View, StyleSheet } from "react-native";

const SummaryLabel = ({ value, title }) => {
  return (
    <View style={styles.summaryLabelContainer}>
      <Text style={styles.summaryTitle}>{title}</Text>
      <Text style={styles.summaryVal}>{value}</Text>
    </View>
  );
};

export default SummaryLabel;

const styles = StyleSheet.create({
  summaryLabelContainer: {
    flexDirection: "row",
    borderBottomWidth: 1.5,
    justifyContent: "space-between",
    paddingHorizontal: 16,
    borderColor: "blue",
    paddingVertical: 8,
  },
  summaryTitle: {
    fontSize: 14,
  },
  summaryVal: {
    fontSize: 14,
    color: "grey",
  },
});
