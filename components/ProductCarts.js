import React from 'react';
import {View , Text ,StyleSheet, Image, TouchableOpacity} from 'react-native';
import {images} from '../constants/Images';

export default class ProductCarts extends React.Component {
    render ()
    {
        return <TouchableOpacity style={styles.container}>
            <Image style={styles.image} 
            source={images.poulpe.uri}></Image>
            <Text>{this.props.item.name} </Text>
            <Text style= {styles.text}>{this.props.item.price}€</Text>
            </TouchableOpacity>
    }
}

const styles = StyleSheet.create({
    container : {
        //flex : 1,
        flexDirection: "row",
        padding: 10,
        margin: 5,
        backgroundColor:"#bbb",
        //justifyContent: 'space-between'
    },
    text : {
        
    },
    image : {
        marginRight: 10,
        width:50,
        height:50
    },
});