import react from 'react';
import React from 'react';
import {View , Text ,StyleSheet, Image} from 'react-native';
// import BackgroundImage from '../components/BackgroundImage';
// import Button from "../components/Button";
import {images} from '../constants/Images';
import {Provider} from 'react-redux'
import { TouchableOpacity } from 'react-native-gesture-handler';




export default class Products extends React.Component {
    render ()
    {
  return <View style= {styles.container}> 
        <TouchableOpacity style={styles.container}>
            <Image style={styles.image} 
            source={images.poulpe.uri}></Image>
            <Text>{this.props.item.name} </Text>
            <Text style= {styles.text}>{this.props.item.price} </Text>
            <Text>€</Text>
        </TouchableOpacity>
    </View>
    }
}
const styles = StyleSheet.create({
    container : {
        flex : 1,
        color:'black',
        alignItems: 'center',
        flexDirection: "row",
        padding: 10,
        margin: 5,
    },
    text : {
    },
    image : {
        marginRight: 10,
        width:30,
        height:30
    },
});