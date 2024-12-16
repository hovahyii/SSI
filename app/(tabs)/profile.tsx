import React from "react";
import { View, Text, TouchableOpacity, Platform, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import * as Clipboard from "expo-clipboard";
import { Copy, User, Mail, Wallet } from "lucide-react-native"; // Import Lucide Icons

const Profile: React.FC = () => {
  const { walletAddress } = useLocalSearchParams<{ walletAddress?: string }>();
  const { name } = useLocalSearchParams<{ name?: string }>();
  const { email } = useLocalSearchParams<{ email?: string }>();

  // Function to copy wallet address to clipboard
  const copyToClipboard = async () => {
    if (walletAddress) {
      await Clipboard.setStringAsync(walletAddress);
      alert("Wallet address copied!");
    }
  };

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.heading}>My Profile</Text>

      {/* Name */}
      <View style={styles.row}>
        <User size={24} color="#3b82f6" style={styles.icon} />
        <View>
          <Text style={styles.label}>Name</Text>
          <Text style={styles.text}>{name || "Wallet not created"}</Text>
        </View>
      </View>

      {/* Email */}
      <View style={styles.row}>
        <Mail size={24} color="#3b82f6" style={styles.icon} />
        <View>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.text}>{email || "Wallet not created"}</Text>
        </View>
      </View>

      {/* Wallet Address */}
      <View style={styles.row}>
        <Wallet size={24} color="#3b82f6" style={styles.icon} />
        <View style={styles.walletContainer}>
          <Text style={styles.label}>My Wallet Address</Text>
          <View style={styles.walletRow}>
            <Text style={styles.walletText} numberOfLines={1} ellipsizeMode="middle">
              {walletAddress || "Wallet not created"}
            </Text>
            <TouchableOpacity onPress={copyToClipboard} style={styles.copyButton}>
              <Copy color="#3b82f6" size={20} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
    marginTop: 16, // Top margin
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1f2937", // Dark gray color
    textAlign: "center",
    marginBottom: 24, // Space below the heading
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16, // Space between rows
  },
  walletContainer: {
    flex: 1, // Allow wallet container to expand
    justifyContent: "center",
  },
  walletRow: {
    flexDirection: "row",
    alignItems: "center",
    maxWidth: "100%", // Ensure row doesn't overflow
  },
  walletText: {
    fontSize: 16,
    color: "#4B5563", // Lighter gray
    flexShrink: 1, // Shrink text if needed
    marginRight: 8, // Space between text and icon
  },
  icon: {
    marginRight: 12, // Space between icon and text
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1f2937", // Dark gray
    marginBottom: 4,
  },
  text: {
    fontSize: 16,
    color: "#4B5563",
  },
  copyButton: {
    padding: 4, // Small padding for touchable area
  },
});
