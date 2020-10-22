import React from 'react';
import {View , Text ,StyleSheet, Image} from 'react-native';
import BackgroundImage from '../components/BackgroundImage';
import Button from "../components/Button";
import { getResources } from '../services/apirest';
import {images} from '../constants/Images';
import Headers from "../components/Headers";



export default class Products extends React.Component {
     state = {
         data : ['banana']
     }
     componentDidMount() {
         getResources('products').then(response=> {
             this.setState({data:response})
         })
     }
render() {
  return <View style= {styles.container}> 
  <Headers  navigation={this.props.navigation}></Headers>
    <BackgroundImage>
            <Text style ={styles.displayProduit}> Choisissez vos produits </Text>
            <Button navigation={this.props.navigation}
            text="Poisson" screen="ProductList"
            data={this.state.data.filter(value => value.category == 0)}
            image={images.poisson.uri}/>
            <Button style={styles.button} navigation={this.props.navigation}
            text="Coquillage" screen="ProductList"
            data={this.state.data.filter(value => value.category == 1)}
            image={images.poulpe.uri}/>
            <Button style={styles.button} navigation={this.props.navigation}
            text="Crustace" screen="ProductList"
            data={this.state.data.filter(value => value.category == 2)}
            image={images.poulpe.uri}/>
            <Button style={styles.button} navigation={this.props.navigation}
            text="promotions" screen="ProductList"
            data={this.state.data.filter(value => value.discount != 0)}
            image={images.poulpe.uri}/>
        </BackgroundImage>
        </View>
    }
}
const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        marginTop: 50,
    },
    displayProduit: {
        padding:10,
        textAlign:"center",
        backgroundColor: "#71c1fc",
        height:50
    },
    button: {
        height:150,
    }
});