import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity, TouchableOpacityProps, StyleSheet } from "react-native";
import React from "react";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: true,
        tabBarStyle: {
          height: 70,
          backgroundColor: "#fff",
        },
        tabBarActiveTintColor: "#007bff",
        tabBarInactiveTintColor: "#8e8e8e",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="scan"
        options={{
          headerShown: false, // Hide the header for QR Scanner
          title: "QR Scanner",
          tabBarIcon: ({ size }) => (
            <FontAwesome name="qrcode" size={size} color="#fff" />
          ),
          tabBarButton: (props) => (
            <TouchableOpacity {...(props as TouchableOpacityProps)} style={styles.qrButton}>
              <FontAwesome name="qrcode" size={30} color="#fff" />
            </TouchableOpacity>
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  qrButton: {
    position: "absolute",
    bottom: 10,
    height: 70,
    width: 70,
    borderRadius: 35,
    backgroundColor: "#007bff",
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    left: "50%",
    marginLeft: -35,
  },
});
