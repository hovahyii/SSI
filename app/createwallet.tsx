import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";
import { createUserWallet } from "../scripts/create-wallet";
import { useRouter } from "expo-router";

const CreateWallet: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [ic, setIc] = useState<string>("");
  const router = useRouter();

  const handleRegister = async (): Promise<void> => {
    if (!name || !email || !ic) {
      Alert.alert("Error", "All fields are required.");
      return;
    }

    try {
      const result = await createUserWallet(name, email, ic);
      const walletAddress = result?.walletAddress;

      router.push({
        pathname: "/profile",
        params: { walletAddress: walletAddress || "", name: name || "", email: email || "" },
      });

      Alert.alert("Success", "Wallet created successfully.");
    } catch (error: any) {
      Alert.alert("Error", `Failed to create wallet: ${error.message}`);
    }
  };

  return (
    <View style={styles.container}>
      {/* Name Input */}
      <Text style={styles.label}>Name</Text>
      <TextInput
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      {/* Email Input */}
      <Text style={styles.label}>Email</Text>
      <TextInput
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        style={styles.input}
      />

      {/* IC Input */}
      <Text style={styles.label}>IC</Text>
      <TextInput
        placeholder="Enter your IC"
        value={ic}
        onChangeText={setIc}
        style={styles.input}
      />

      {/* Submit Button */}
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateWallet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
    justifyContent: "center",
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
    paddingLeft: 4, // Add padding to the label
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc", // Light gray border
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#3b82f6", // Blue button background
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
