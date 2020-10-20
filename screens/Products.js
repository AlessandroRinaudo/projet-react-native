import React from 'react';
import {View , Text ,StyleSheet, Image} from 'react-native';
// import BackgroundImage from '../components/BackgroundImage';
import Button from "../components/Button";
// import {images} from '../Constants/Images';



export default function Products(props) {
  return <View style= {styles.container}> 
            <Text >Page Products</Text>
            <Button navigation={props.navigation}
            text="Retour" screen="Home"/>
        </View>
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        color:'black',
        alignItems: 'center',
        justifyContent : 'center',
    },
});