import React from 'react';
import {View , Text ,StyleSheet, Image, ImageBackground} from 'react-native';
import Button from "../components/Button"
import BackgroundImage from '../components/BackgroundImage';
import {images} from '../constants/Images';
import {restaurants} from '../constants/Restaurants';

export default function Recettes(props) {
  return <BackgroundImage>
        <View style= {styles.container}> 
            <Text style= {styles.containerHomeTitle} > Restaurants partenaires</Text>
            <Text style= {styles.containerHome} > Tous les restaurants partenaires avec le bateau de Thibault.</Text>
            <Text style= {styles.containerHome} >06.63.99.99.78</Text>
            <Text style= {styles.containerHome} >lebateaudethibauth@gmail.com </Text>
            <Text style= {styles.containerHome} >www.facebook.com/lebateaudethibauth </Text>
            
            
            <View style={styles.affichage}>
                {restaurants.map((value,index)=> {
                    return <Button style= {styles.containerButton}
                        navigation={props.navigation}
                        text={value.name}
                        screen=""
                        image={value.image_icon}
                        />
                })}
                <Button style= {styles.containerButton}
                navigation={props.navigation}
                text="Devenez partenaire!"
                screen=""
                image={images.poisson.uri}
                />
            </View>
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
        
    }, 
    affichage : {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
    },

});