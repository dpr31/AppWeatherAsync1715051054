import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

const Footer = props => {
  return (
    <View style={styles.footerBar}>
      <Text style={styles.headerText}> {props.judul} </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  footerBar: {
    backgroundColor: "#33FFCC",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10,
    paddingTop: 10,
    position: "relative",
    height: 50,
    marginTop: 15,
  },
  headerText: {
    fontSize: 18,
    color: "black",
    textAlign: "center"
  }
});
export default Footer;
