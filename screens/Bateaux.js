import React from 'react';
import {View , Text ,StyleSheet, Image, ImageBackground} from 'react-native';
import Button from "../components/Button"
import BackgroundImage from '../components/BackgroundImage';
import {images} from '../constants/Images';

export default function Bateaux(props) {
  return <BackgroundImage>
        <View style= {styles.container}> 
            <Text style= {styles.containerHomeTitle} >Nos bateaux partenaires</Text>
            <Text style= {styles.containerHome} > Tous les eaux mènent à Thibault.</Text>
            <Text style= {styles.containerHome} >06.63.99.99.78</Text>
            <Text style= {styles.containerHome} >lebateaudethibauth@gmail.com </Text>
            <Text style= {styles.containerHome} >www.facebook.com/lebateaudethibauth </Text>
            
            
            <View style={styles.affichage}>
            <Button style= {styles.containerButton}
            navigation={props.navigation}
            text="de la Brise"
            screen=""
            image={images.delaBrise.uri}
            />

            
            <Button style= {styles.containerButton}
            navigation={props.navigation}
            text="Saphir"
            screen=""
            image={images.saphir.uri}
            />

            <Button style= {styles.containerButton}
            navigation={props.navigation}
            text="Gast Micher"
            screen=""
            image={images.gastMicher.uri}
            />

            <Button style= {styles.containerButton}
            navigation={props.navigation}
            text="Aquilon"
            screen=""
            image={images.aquilon.uri}
            />

            <Button style= {styles.containerButton}
            navigation={props.navigation}
            text="Contact"
            screen=""
            image={images.ancre.uri}
            />
            
            <Button style= {styles.containerButton}
            navigation={props.navigation}
            text="Contact"
            screen=""
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