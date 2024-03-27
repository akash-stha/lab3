import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import TransactionDetailScreen from "./screens/TransactionDetailScreen";
import SummaryScreen from "./screens/SummaryScreen";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import TransactionListScreen from "./screens/TransactionListScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TransactionStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TransactionList"
        component={TransactionListScreen}
        options={{
          headerTitle: "Transactions List",
        }}
      />
      <Stack.Screen
        name="TransactionDetails"
        component={TransactionDetailScreen}
        options={{
          headerBackTitle: "Back",
          headerTitle: "Transactions Details",
        }}
      />
    </Stack.Navigator>
  );
}

export default function Route() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "blue",
        }}
      >
        <Tab.Screen
          name="TransactionScreen"
          component={TransactionStack}
          options={{
            title: "Transactions",
            header: () => null,
            tabBarIcon: ({ color, size }) => (
              <Entypo name="text-document" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="SummaryScreen"
          component={SummaryScreen}
          options={{
            headerTitle: "Summary",
            title: "Summary",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="information-outline" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
