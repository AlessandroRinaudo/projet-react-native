import React from 'react';
import { View , Text ,StyleSheet } from "react-native"
import Button from "../components/Button";

export default function Headers(props){
    return <View style={styles.container}>
        <Button navigation={props.navigation}
            text="Retour" screen="Home"/>
        <Text style={styles.text}>Le bateau de Thibault</Text>
        <Button navigation={props.navigation}
            text="Panier" screen="Cart"/>
    </View>
 }

 const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent : 'center',
        backgroundColor: "#000000",
    },
    text :{
        color: 'white'
    }
 })