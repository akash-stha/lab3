import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { transactionData } from "../transactionData";
import TransactionItem from "../components/TransactionItem";

export default function TransactionListScreen() {
  return (
    <View
      style={{
        padding: 8,
      }}
    >
      <FlatList
        data={transactionData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TransactionItem data={item} />}
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  seperator: {
    height: 1,
    backgroundColor: "blue",
    marginVertical: 8,
  },
});
