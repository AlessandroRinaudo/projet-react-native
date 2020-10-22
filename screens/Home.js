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
            
            <View style={styles.affichage}>
            <Button style= {styles.containerButton}
            navigation={props.navigation}
            text="Produits et promotions"
            screen="Products"
            image={images.poisson.uri}
            />
            </View>
        <View style={{ flexDirection : 'column'}}>
            <View style={{ flexDirection: 'row'}}>
                <View>
                    <Button style= {styles.containerButton}
                    navigation={props.navigation}
                    text="Bateaux"
                    screen="Bateaux"
                    image={images.ancre.uri}
                    />
                </View>
            
                <View>
                    <Button style= {styles.containerButton}
                    navigation={props.navigation}
                    text="Restaurants"
                    screen="Restaurants"
                    image={images.restaurant.uri}
                    />
                </View>

            </View>

            <View style={{ flexDirection: 'row'}}>
                <View>
                    <Button style= {styles.containerButton}
                    navigation={props.navigation}
                    text="Recettes"
                    screen="Recettes"
                    image={images.recette.uri}
                    />
                </View>
            
                <View>
                    <Button style= {styles.containerButton}
                    navigation={props.navigation}
                    text="Contact"
                    screen="Contact"
                    image={images.poisson.uri}
                    />
                </View>
            </View>

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