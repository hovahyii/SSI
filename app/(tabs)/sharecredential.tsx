import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert, Switch } from "react-native";
import { createUserWallet } from "@/scripts/create-wallet";
import { useLocalSearchParams } from "expo-router"; 
import { ImageSourcePropType } from "react-native";

const ShareCredential = () => {
  const [name, setName] = useState(false);
  const [ic, setIc] = useState(false);
  const [email, setEmail] = useState(false);
  const [health, setHealth] = useState(false);
  const [certificateID, setcertificateID] = useState(false);

  // Retrieve params from the navigation or local search params
  const { createdAt, certificateImageFile } = useLocalSearchParams<{
    createdAt?: string;
    certificateImageFile?: string; // Pass as a stringified URI or object
  }>();

  // Parse the image source if provided
  const parsedCertificateImageFile: ImageSourcePropType | null =
    certificateImageFile
      ? { uri: certificateImageFile } // Assuming it's passed as a URI
      : null;

  const handleContinue = () => {
    const { certificateImageFile } = useLocalSearchParams<{ certificateImageFile?: any }>(); // Adjusted to accept any object

    
    const selectedDetails = [];
    if (certificateID) selectedDetails.push("certificateID");
    if (name) selectedDetails.push("Name");
    if (ic) selectedDetails.push("IC");
    if (email) selectedDetails.push("Email");
    if (health) selectedDetails.push("Health Status");
    

    if (selectedDetails.length === 0) {
      Alert.alert("No Details Selected", "Please select at least one detail.");
    } else {
      Alert.alert("Selected Details", `You have selected: ${selectedDetails.join(", ")}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MySejahtera Health Credential</Text>

      <Text style={styles.title}>Select which detail to share</Text>

      {/* Render Image
      {parsedCertificateImageFile ? (
        <Image source={parsedCertificateImageFile} style={styles.image} />
      ) : (
        <Text style={styles.noImageText}>No Image Available</Text>
      )} */}

      {/* Certificate ID Switch */}
      <View style={styles.item}>
        <Switch value={certificateID} onValueChange={setcertificateID} />
        <Text style={styles.label}>Certificate ID</Text>
        <Text style={styles.label}>{certificateID}</Text>
      </View>

      {/* Name Switch */}
      <View style={styles.item}>
        <Switch value={name} onValueChange={setName} />
        <Text style={styles.label}>Name</Text>
        <Text style={styles.label}>{name}</Text>
      </View>

      {/* IC Switch */}
      <View style={styles.item}>
        <Switch value={ic} onValueChange={setIc} />
        <Text style={styles.label}>IC</Text>
        <Text style={styles.label}>{ic}</Text>
      </View>

      {/* Email Switch */}
      <View style={styles.item}>
        <Switch value={email} onValueChange={setEmail} />
        <Text style={styles.label}>Email</Text>
        <Text style={styles.label}>{email}</Text>
      </View>

      {/* Health status Switch */}
      <View style={styles.item}>
        <Switch value={health} onValueChange={setHealth} />
        <Text style={styles.label}>Health Status</Text>
        <Text style={styles.label}>{email}</Text>
      </View>

      

      {/* Continue Button */}
      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginLeft: 10,
  },
  continueButton: {
    marginTop: 20,
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  continueText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ShareCredential;
