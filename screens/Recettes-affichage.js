import React from 'react';
import {View , Text ,StyleSheet ,Image} from 'react-native';
import BackgroundImage from '../components/BackgroundImage';
import {images} from '../constants/Images';
import {recettes} from '../constants/Recettes'

export default function Recettesaffichage(props) {
    return  <View style = {styles.container}>
       <BackgroundImage>
        <View style={styles.title}>
            <Text>{recettes.name }</Text>
        </View>
        
        <View style={{flex: 2, alignItems: 'center'}}>
        <Image source={recettes.images} />
    
        </View>

       
        <View style={{flex: 3, alignItems:'center'}}>
            <Text>Qu'il est chaud le soleil</Text>
              
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