import React from 'react';
import {View , Text ,StyleSheet, Image, ImageBackground} from 'react-native';
import Button from "../components/Button"
// import BackgroundImage from '../components/BackgroundImage';
// import {images} from '../Constants/Images';

export default function Home(props) {
  return <ImageBackground source={require('../assets/background.png')} style={{width:'100%',height:'100%'}}>
        <View style= {styles.container}> 
            <Text style= {styles.containerHomeTitle} >Le bateau de Thibauth</Text>
            <Text style= {styles.containerHome} >Vente en direct de notre bateau  </Text>
            <Text style= {styles.containerHome} >Produits selon la saison, Livraisons sur Paris  </Text>
            <Text style= {styles.containerHome} >06.63.99.99.78</Text>
            <Text style= {styles.containerHome} >lebateaudethibauth@gmail.com </Text>
            <Text style= {styles.containerHome} >www.facebook.com/lebateaudethibauth </Text>
            <Button style= {styles.containerButton}
            navigation={props.navigation}
            text="Produits et promotions"
            screen="Products"
            />

            <Button style= {styles.containerButton}
            navigation={props.navigation}
            text="Bateaux"
            screen="Bateaux"
            />

            <Button style= {styles.containerButton}
            navigation={props.navigation}
            text="Restaurants"
            screen="Restaurants"
            />

            <Button style= {styles.containerButton}
            navigation={props.navigation}
            text="Recettes"
            screen=""
            />

            <Button style= {styles.containerButton}
            navigation={props.navigation}
            text="Contact"
            screen=""
            />

        </View>
        </ImageBackground>
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