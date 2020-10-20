import React from 'react';
import {View , Text ,StyleSheet, Image} from 'react-native';
import Button from "../components/Button"
// import BackgroundImage from '../components/BackgroundImage';
// import {images} from '../Constants/Images';

export default function Home(props) {
  return <View style= {styles.container}> 
            <Text >Page Home</Text>
            <Button navigation={props.navigation}
            text="Button"
                    screen="Products"/>
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