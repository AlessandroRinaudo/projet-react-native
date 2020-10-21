import React from 'react';
import {View , Text ,StyleSheet, Image, ImageBackground} from 'react-native';
import Button from "../components/Button"
import BackgroundImage from '../components/BackgroundImage';
import {images} from '../constants/Images';

export default function Home(props) {
  return <BackgroundImage>
        <View style= {styles.container}> 
            <Text style= {styles.containerHomeTitle} > Le bateau de Thibauth</Text>
            <Text style= {styles.containerHome} >Vente en direct de notre bateau  </Text>
            <Text style= {styles.containerHome} >Produits selon la saison, Livraisons sur Paris  </Text>
            <Text style= {styles.containerHome} >06.63.99.99.78</Text>
            <Text style= {styles.containerHome} >lebateaudethibauth@gmail.com </Text>
            <Text style= {styles.containerHome} >www.facebook.com/lebateaudethibauth </Text>
            <Button style= {styles.containerButton}
            navigation={props.navigation}
            text="Produits et promotions"
            screen="Products"
            image={images.poisson.uri}
            />

            <Button style= {styles.containerButton}
            navigation={props.navigation}
            text="Bateaux"
            screen="Bateaux"
            image={images.ancre.uri}
            />

            <Button style= {styles.containerButton}
            navigation={props.navigation}
            text="Restaurants"
            screen="Restaurants"
            image={images.restaurant.uri}
            />

            <Button style= {styles.containerButton}
            navigation={props.navigation}
            text="Recettes"
            screen=""
            image={images.recette.uri}
            />

            <Button style= {styles.containerButton}
            navigation={props.navigation}
            text="Contact"
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