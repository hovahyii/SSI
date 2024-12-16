import React from "react";
import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { View, TouchableOpacity } from "react-native";

interface TabBarIconProps {
  color: string;
  size: number;
}

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false, // Hide the header for all screens
        tabBarShowLabel: true, // Default for other tabs
        tabBarStyle: {
          height: 70,
          backgroundColor: "#fff",
        },
        tabBarActiveTintColor: "#007bff",
        tabBarInactiveTintColor: "#8e8e8e",
      }}
    >
      {/* Home Screen */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }: TabBarIconProps) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
      />

      {/* QR Scanner Screen */}
      <Tabs.Screen
        name="qrcode"
        options={{
          tabBarShowLabel: false, // Remove label for this tab
          tabBarButton: (props) => (
            <TouchableOpacity
              {...props}
              delayLongPress={props.delayLongPress ?? undefined}
              style={{
                position: "absolute",
                bottom: 20,
                left: "50%",
                width: 70,
                height: 70,
                marginLeft: -35, // Center horizontally
                backgroundColor: "#fff",
                borderRadius: 35,
                borderWidth: 2,
                borderColor: "#007bff",
                alignItems: "center",
                justifyContent: "center",
                elevation: 5, // Shadow for Android
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 4,
              }}
            >
              <FontAwesome name="qrcode" size={30} color="#007bff" />
            </TouchableOpacity>
          ),
        }}
      />

      {/* Profile Screen */}
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }: TabBarIconProps) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
