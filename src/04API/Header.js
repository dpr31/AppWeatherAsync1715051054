
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.headerBar}>
            <Text style={styles.headerText}> {props.judul} </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    headerBar: {
        backgroundColor: "#33FFCC",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 100,
        paddingRight: 100,
        paddingBottom: 10,
        paddingTop: 10,
        position: "relative",
        height: 50
    },
    headerText: {
        fontSize: 18,
        color: "black",
        textAlign: "center"
    },

});
export default Header;
