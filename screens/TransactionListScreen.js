import React from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import TransactionItem from "../components/TransactionItem";

export default function TransactionListScreen({ transactionData, navigation }) {
  return (
    <View style={styles.main}>
      <FlatList
        data={transactionData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TransactionItem data={item} />}
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
      />
      <Button
        title="Add a Transaction"
        onPress={() => navigation.navigate("AddTransaction")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    padding: 8,
    paddingBottom: 24,
    flex: 1,
    justifyContent: "space-between",
  },
  seperator: {
    height: 1,
    backgroundColor: "blue",
    marginVertical: 8,
  },
});
