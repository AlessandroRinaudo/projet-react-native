import React from 'react';
import {View , Text ,StyleSheet ,Image} from 'react-native';
import BackgroundImage from '../components/BackgroundImage';
import {images} from '../constants/Images';
import {recettes} from '../constants/Recettes'

export default function Recettesaffichage(props) {
    let recetteData = props.route.params.data ? props.route.params.data : [];
    return  <View style = {styles.container}>
       <BackgroundImage>
        <View style={styles.title}>
            <Text>{recetteData.name_long}</Text>
        </View>
        
        <View style={{flex: 2, alignItems: 'center'}}>
        <Image source={recetteData.image} />
    
        </View>

       
        <View style={{flex: 3, alignItems:'center'}}>
            <Text>{recetteData.description}</Text>
              
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