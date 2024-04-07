import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

export default function AddTransactionScreen({ navigation }) {
  const [transactionName, setTransactionName] = useState("");
  const [transactionLocation, setTransactionLocation] = useState("");
  const [transactionDate, setTransactionDate] = useState("");
  const [transactionPrice, setTransactionPrice] = useState("");

  const onSubmitTransaction = async () => {
    const ref = doc(collection(db, "transactionData"));
    try {
      await setDoc(ref, {
        id: ref.id,
        transactionName: transactionName,
        transactionLocation: transactionLocation,
        transactionDate: transactionDate,
        transactionPrice: Number(transactionPrice),
      });
      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Enter name of the store"
        onChangeText={(text) => setTransactionName(text)}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Enter the Location"
        onChangeText={(text) => setTransactionLocation(text)}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Enter the date"
        onChangeText={(text) => setTransactionDate(text)}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Enter the price"
        inputMode="numeric"
        onChangeText={(text) => setTransactionPrice(text)}
      />
      <View style={styles.button}>
        <Button title="Submit Transaction" onPress={onSubmitTransaction} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: { padding: 8, flex: 1 },
  textInput: {
    padding: 12,
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 8,
    marginVertical: 8,
  },
  button: {
    marginTop: 32,
  },
});
