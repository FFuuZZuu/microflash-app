import React, { Component } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

// <Image source={require(img)} style={{ width: 50, height: 50 }}/>

const BasicCard = (props ) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.name}</Text>
            <View style={styles.bottom}>
                <Image source={require('../assets/example-img.png')} style={{ width: 100, height: 100, marginRight: 5 }}/>
                <Text style={{marginLeft: 5, flexShrink: 1 }}>{props.desc}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexShrink: 1,
        maxWidth: '85%',
        flex: 0,
        flexBasis: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
        padding: 10,
        borderRadius: 10,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,

        backgroundColor : "#FFFF"
    },
    title: {
        fontSize: 24,
        marginBottom: 15
    },
    bottom: {
        display: 'flex',
        flexShrink: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default BasicCard;
