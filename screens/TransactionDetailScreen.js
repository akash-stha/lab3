import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TransactionDetailScreen = ({ route }) => {
  const data = route.params;
  const transactionName = data.transactionName ?? "";
  const transactionDate = data.transactionDate ?? "";
  const transactionLocation = data.transactionLocation ?? "";
  const transactionPrice = data.transactionPrice ?? 0;

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.transactionPrice}>
          ${transactionPrice.toFixed(2)}
        </Text>
        <Text style={styles.transactionName}>{transactionName}</Text>
        <Text style={styles.transactionLocation}>{transactionLocation}</Text>
      </View>
      <View style={styles.bottomContainer}>
        <Text>Transaction Date</Text>
        <Text>{transactionDate}</Text>
      </View>
    </View>
  );
};

export default TransactionDetailScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    paddingVertical: 36,
  },
  transactionPrice: {
    fontSize: 32,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
  transactionName: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  transactionLocation: {
    fontSize: 14,
    textAlign: "center",
    fontWeight: "600",
    color: "white",
  },
  bottomContainer: {
    flexDirection: "row",
    marginTop: 8,
    paddingHorizontal: 8,
    justifyContent: "space-between",
  },
});
