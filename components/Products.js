import react from 'react';
import React from 'react';
import {View , Text ,StyleSheet, Image} from 'react-native';
// import BackgroundImage from '../components/BackgroundImage';
// import Button from "../components/Button";
// import {images} from '../Constants/Images';
import {Provider} from 'react-redux'




export default class Products extends React.Component {
    render ()
    {
  return <View style= {styles.container}> 
            <Text >{this.props.item.name} </Text>
            
        </View>
    }
}
const styles = StyleSheet.create({
    container : {
        flex : 1,
        color:'black',
        alignItems: 'center',
        justifyContent : 'center',
    },
});