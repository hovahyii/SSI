import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

const { width } = Dimensions.get("window");
const SCAN_SIZE = width * 0.6; // 60% of screen width

export default function QRCodeScreen() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  useEffect(() => {
    const getPermission = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };
    getPermission();
  }, []);

  if (hasPermission === null) {
    return <View style={{ flex: 1, backgroundColor: "#000" }} />;
  }

  if (hasPermission === false) {
    return <View style={{ flex: 1, backgroundColor: "#000" }} />;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={() => {
          // Handle scanned data if needed
        }}
        style={StyleSheet.absoluteFillObject}
      />

      {/* Overlay */}
      <View style={styles.overlay}>
        <View style={styles.scanArea} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
  },
  scanArea: {
    width: SCAN_SIZE,
    height: SCAN_SIZE,
    borderWidth: 4,
    borderColor: "#fff",
    borderRadius: 10,
    backgroundColor: "transparent",
  },
});
