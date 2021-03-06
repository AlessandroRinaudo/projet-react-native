import React from 'react';
import {View , Text ,StyleSheet ,Image} from 'react-native';
import BackgroundImage from '../components/BackgroundImage';
import {images} from '../constants/Images';

export default function Contact(props) {
    return  <View style = {styles.container}>
       <BackgroundImage>
        <View style={styles.title}>
            <Text>Le bateau de Thibault </Text>
        </View>
        
        <View style={{flex: 2, alignItems: 'center'}}>
        <Image source={images.tig.uri} />
    
        </View>

        <View style={styles.contact}>
            <Text>
                06.63.99.99.78
            </Text>
            <Text>
                lebateaudethibault@gmail.com
            </Text>
            <Text>
                www.facebook.com/lebateaudethibault
            </Text>
        </View>

        <View style={{flex: 3, alignItems:'center'}}>
            <Text>Qu'il est chaud le soleil</Text>
              <Text>Qand nous sommes en vacances</Text>
              <Text>Y a d'la joie, des hirondelles</Text>
              <Text>C'est le sud de la france</Text> 
              <Text>Papa bricole au garage</Text>
              <Text>Maman li dans chaise longue</Text> 
              <Text>Dans ce joli payssage</Text>
              <Text>Moi, je me balade en tongs</Text> 

              <Text>Que du bonheur!</Text>
              <Text>Que du bonheur!</Text>
        </View>
        </BackgroundImage>
    </View>
    
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        color:'black',
        justifyContent : 'center',
        marginTop: 20,
    },
    contact:{
        flex: 1, 
        alignItems:'center',
        marginTop: 10,
    },
    title : {
        flex: 1,
        fontSize: 100 , 
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    }
});