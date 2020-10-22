import React from 'react';
import {View , Text ,StyleSheet, Image, ImageBackground} from 'react-native';
import Button from "../components/Button"
import BackgroundImage from '../components/BackgroundImage';
import {recettes} from '../constants/Recettes';

export default function Recettes(props) {
  return <BackgroundImage>
        <View style= {styles.container}> 
            <Text style= {styles.containerHomeTitle} > Nos recettes</Text>
            <Text style= {styles.containerHome} > Toutes les recettes de Tibault</Text>
            <Text style= {styles.containerHome} >06.63.99.99.78</Text>
            <Text style= {styles.containerHome} >lebateaudethibauth@gmail.com </Text>
            <Text style= {styles.containerHome} >www.facebook.com/lebateaudethibauth </Text>
            
            
            <View style={styles.affichage}>
                {recettes.map((value,index)=> {
                    return <Button style= {styles.containerButton}
                        navigation={props.navigation}
                        text={value.name}
                        screen="Recettes-affichage"
                        image={value.image_icon}
                        data = {value}
                        />
                })}

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