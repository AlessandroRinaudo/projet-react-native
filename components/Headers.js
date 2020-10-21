import React from 'react';
import { View , Text ,StyleSheet } from "react-native"
import Button from "../components/Button";
import {images} from '../constants/Images';

export default function Headers(props){
    return <View style={styles.container}>
        <Button navigation={props.navigation}
            text="" screen="Home"
            image={images.home.uri}/>
        <Text style={styles.text}>Le bateau de Thibault</Text>
        <Button navigation={props.navigation}
            text="" screen="Cart"
            image={images.cart.uri}/>
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