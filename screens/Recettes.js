import React from 'react';
import {View , Text ,StyleSheet, Image, ImageBackground} from 'react-native';
import Button from "../components/Button"
import BackgroundImage from '../components/BackgroundImage';
import {images} from '../constants/Images';

export default function Recettes(props) {
  return <BackgroundImage>
        <View style= {styles.container}> 
            <Text style= {styles.containerHomeTitle} > Nos recettes</Text>
            <Text style= {styles.containerHome} > Toutes les recettes de Tibault</Text>
            <Text style= {styles.containerHome} >06.63.99.99.78</Text>
            <Text style= {styles.containerHome} >lebateaudethibauth@gmail.com </Text>
            <Text style= {styles.containerHome} >www.facebook.com/lebateaudethibauth </Text>
            <Button style= {styles.containerButton}
            navigation={props.navigation}
            text="Homard"
            screen=""
            image={images.poisson.uri}
            />

            <Button style= {styles.containerButton}
            
            text="St Jacques"
            screen=""
            image={images.ancre.uri}
            />

            <Button style= {styles.containerButton}
            navigation={props.navigation}
            text="Bar"
            screen=""
            image={images.restaurant.uri}
            />

            <Button style= {styles.containerButton}
            navigation={props.navigation}
            text="Tourteau"
            screen=""
            image={images.recette.uri}
            />

            <Button style= {styles.containerButton}
            navigation={props.navigation}
            text="recette"
            screen=""
            image={images.poisson.uri}
            />
            
            <Button style= {styles.containerButton}
            navigation={props.navigation}
            text="recette"
            screen=""
            image={images.poisson.uri}
            />

        </View>
        </BackgroundImage>
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        color:'black',
        alignItems: 'center',
        justifyContent : 'center',
       
    },
    containerHomeTitle : {
        fontSize:30,
        color:'#fff',
    } ,
    containerButton : {
        fontSize:30,
        color:'#fff',
        marginBottom:45
    },
    containerHome : {
        
    } 
});