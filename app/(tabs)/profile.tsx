import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import * as Clipboard from "expo-clipboard";
import { Copy, User, Mail, Wallet } from "lucide-react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile: React.FC = () => {
  const router = useRouter();
  const { walletAddress: initialWalletAddress } = useLocalSearchParams<{ walletAddress?: string }>();
  const { name: initialName } = useLocalSearchParams<{ name?: string }>();
  const { email: initialEmail } = useLocalSearchParams<{ email?: string }>();

  // Store credentials in state so we can update UI immediately if needed
  const [walletAddress, setWalletAddress] = useState(initialWalletAddress || "");
  const [name, setName] = useState(initialName || "");
  const [email, setEmail] = useState(initialEmail || "");

  const copyToClipboard = async () => {
    if (walletAddress) {
      await Clipboard.setStringAsync(walletAddress);
      Alert.alert("Copied", "Wallet address copied to clipboard!");
    }
  };

  const handleCreateCredentials = async () => {
    try {
      // Store credentials in AsyncStorage
      await AsyncStorage.setItem("walletCreated", "true");
      await AsyncStorage.setItem("name", name);
      await AsyncStorage.setItem("email", email);
      await AsyncStorage.setItem("walletAddress", walletAddress);

      // Navigate back to HomeScreen so that it will show ViewCredential
      router.push("/"); 
    } catch (error) {
      console.error("Error saving wallet credentials:", error);
      Alert.alert("Error", "Could not save credentials.");
    }
  };

  const handleDeleteCredentials = async () => {
    try {
      // Remove all stored credentials
      await AsyncStorage.removeItem("walletCreated");
      await AsyncStorage.removeItem("name");
      await AsyncStorage.removeItem("email");
      await AsyncStorage.removeItem("walletAddress");

      // Clear local states as well
      setName("");
      setEmail("");
      setWalletAddress("");

      // Navigate back to home screen so that it shows create wallet page
      router.push("/");
    } catch (error) {
      console.error("Error deleting wallet credentials:", error);
      Alert.alert("Error", "Could not delete credentials.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Profile</Text>

      {/* Name */}
      <View style={styles.row}>
        <User size={24} color="#3b82f6" style={styles.icon} />
        <View>
          <Text style={styles.label}>Name</Text>
          <Text style={styles.text}>{name || "No name set"}</Text>
        </View>
      </View>

      {/* Email */}
      <View style={styles.row}>
        <Mail size={24} color="#3b82f6" style={styles.icon} />
        <View>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.text}>{email || "No email set"}</Text>
        </View>
      </View>

      {/* Wallet Address */}
      <View style={styles.row}>
        <Wallet size={24} color="#3b82f6" style={styles.icon} />
        <View style={styles.walletContainer}>
          <Text style={styles.label}>My Wallet Address</Text>
          <View style={styles.walletRow}>
            <Text
              style={styles.walletText}
              numberOfLines={1}
              ellipsizeMode="middle"
            >
              {walletAddress || "No wallet address"}
            </Text>
            <TouchableOpacity onPress={copyToClipboard} style={styles.copyButton}>
              <Copy color="#3b82f6" size={20} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Create Credentials Button */}
      <TouchableOpacity style={styles.createButton} onPress={handleCreateCredentials}>
        <Text style={styles.createButtonText}>Create Credentials</Text>
      </TouchableOpacity>

      {/* Delete Credentials Button */}
      <TouchableOpacity style={styles.deleteButton} onPress={handleDeleteCredentials}>
        <Text style={styles.deleteButtonText}>Delete Credentials</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
    marginTop: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1f2937",
    textAlign: "center",
    marginBottom: 24,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  walletContainer: {
    flex: 1,
    justifyContent: "center",
  },
  walletRow: {
    flexDirection: "row",
    alignItems: "center",
    maxWidth: "100%",
  },
  walletText: {
    fontSize: 16,
    color: "#4B5563",
    flexShrink: 1,
    marginRight: 8,
  },
  icon: {
    marginRight: 12,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: 4,
  },
  text: {
    fontSize: 16,
    color: "#4B5563",
  },
  copyButton: {
    padding: 4,
  },
  createButton: {
    marginTop: 30,
    backgroundColor: "#3b82f6",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignSelf: "center",
  },
  createButtonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
  },
  deleteButton: {
    marginTop: 10,
    backgroundColor: "#dc2626",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignSelf: "center",
  },
  deleteButtonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
  },
});
