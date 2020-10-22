import React from 'react';
import {View , Text ,StyleSheet, Image, ImageBackground} from 'react-native';
import Button from "../components/Button"
import BackgroundImage from '../components/BackgroundImage';
import {images} from '../constants/Images';
import {ships} from '../constants/Ships';

export default function Bateaux(props) {
  return <BackgroundImage>
        <View style= {styles.container}> 
            <Text style= {styles.containerHomeTitle} >Nos bateaux partenaires</Text>
            <Text style= {styles.containerHome} > Tous les eaux mènent à Thibault.</Text>
            <Text style= {styles.containerHome} >06.63.99.99.78</Text>
            <Text style= {styles.containerHome} >lebateaudethibauth@gmail.com </Text>
            <Text style= {styles.containerHome} >www.facebook.com/lebateaudethibauth </Text>
            
            
            <View style={styles.affichage}>
                {ships.map((value,index)=> {
                    return <Button style= {styles.containerButton}
                        navigation={props.navigation}
                        text={value.name}
                        screen="Bateaux-affichage"
                        image={value.image_icon}
                        data = {value}
                        />
                })}
            <Button style= {styles.containerButton}
            navigation={props.navigation}
            text="Contact"
            screen="Contact"
            image={images.ancre.uri}
            />
            
            <Button style= {styles.containerButton}
            navigation={props.navigation}
            text="Contact"
            screen="Contact"
            image={images.ancre.uri}
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