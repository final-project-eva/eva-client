import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function TitleBar() {
  return (
      <View style={{ flex: 1, backgroundColor: "#6F1A1D" }}>
        <Text style={styles.text}>EVA</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  text : {
    marginTop: "5%",
    color: "white",
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
  }
})

