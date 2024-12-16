import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Switch,
} from "react-native";
import { useRouter } from "expo-router";

const ShareCredential = () => {
  const [name, setName] = useState(false);
  const [ic, setIc] = useState(false);
  const [email, setEmail] = useState(false);
  const [health, setHealth] = useState(false);
  const [certificateID, setCertificateID] = useState(false);

  const [buttonColor, setButtonColor] = useState("#007bff"); // Default button color
  const router = useRouter();

  const handleContinue = () => {
    const selectedDetails = [];
    if (certificateID) selectedDetails.push("Certificate ID");
    if (name) selectedDetails.push("Name");
    if (ic) selectedDetails.push("IC");
    if (email) selectedDetails.push("Email");
    if (health) selectedDetails.push("Health Status");

    if (selectedDetails.length === 0) {
      Alert.alert("No Details Selected", "Please select at least one detail.");
    } else {
      // Change button color
      setButtonColor("#28a745");

      Alert.alert("Details Selected", `You selected: ${selectedDetails.join(", ")}`);

      // Navigate to the QR Code Generator page
      router.push("/qr");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MySejahtera Health Credential</Text>
      <Text style={styles.subTitle}>Select which detail to share</Text>

      {/* Switches */}
      {[
        { label: "Certificate ID", state: certificateID, setState: setCertificateID },
        { label: "Name", state: name, setState: setName },
        { label: "IC", state: ic, setState: setIc },
        { label: "Email", state: email, setState: setEmail },
        { label: "Health Status", state: health, setState: setHealth },
      ].map(({ label, state, setState }) => (
        <View style={styles.item} key={label}>
          <Switch
            value={state}
            onValueChange={setState}
            trackColor={{ true: "#28a745", false: "#ccc" }}
            thumbColor={state ? "#28a745" : "#f4f4f4"}
          />
          <Text style={styles.label}>{label}</Text>
        </View>
      ))}

      {/* Continue Button */}
      <TouchableOpacity
        style={[styles.continueButton, { backgroundColor: buttonColor }]}
        onPress={handleContinue}
      >
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
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 16,
    marginBottom: 20,
    color: "#555",
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
