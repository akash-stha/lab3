import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import TransactionDetailScreen from "./screens/TransactionDetailScreen";
import SummaryScreen from "./screens/SummaryScreen";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import TransactionListScreen from "./screens/TransactionListScreen";
import { db } from "./firebaseConfig";
import { collection, onSnapshot } from "firebase/firestore";
import AddTransactionScreen from "./screens/AddTransactionScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TransactionStack({ transactionData }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TransactionList"
        options={{
          headerTitle: "Transactions List",
        }}
      >
        {(props) => (
          <TransactionListScreen {...props} transactionData={transactionData} />
        )}
      </Stack.Screen>
      <Stack.Screen
        name="TransactionDetails"
        component={TransactionDetailScreen}
        options={{
          headerBackTitle: "Back",
          headerTitle: "Transactions Details",
        }}
      />
      <Stack.Screen
        name="AddTransaction"
        component={AddTransactionScreen}
        options={{
          headerBackTitle: "Back",
          headerTitle: "Add Transaction",
        }}
      />
    </Stack.Navigator>
  );
}

export default function Route() {
  const [transactionData, setTransactionData] = useState([]);
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "transactionData"), (snapshot) => {
      if (snapshot.docs.length > 0) {
        const tsData = [];
        snapshot.docs.forEach((item) => tsData.push(item.data()));
        setTransactionData(tsData);
      }
    });

    return () => unsub();
  }, []);
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "blue",
        }}
      >
        <Tab.Screen
          name="TransactionScreen"
          options={{
            title: "Transactions",
            header: () => null,
            tabBarIcon: ({ color, size }) => (
              <Entypo name="text-document" size={size} color={color} />
            ),
          }}
        >
          {(props) => (
            <TransactionStack {...props} transactionData={transactionData} />
          )}
        </Tab.Screen>
        <Tab.Screen
          name="SummaryScreen"
          options={{
            headerTitle: "Summary",
            title: "Summary",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="information-outline" size={size} color={color} />
            ),
          }}
        >
          {(props) => (
            <SummaryScreen {...props} transactionData={transactionData} />
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
