import react from 'react';
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
            <Text style={{marginVertical : 10 , textAlign:"center"}}> Choisissez vos produits </Text>
            <Button navigation={this.props.navigation}
            text="Poisson" screen="ProductList"
            data={this.state.data}
            image={images.poulpe.uri}/>
            <Button style={styles.button} navigation={this.props.navigation}
            text="Coquillage" screen="ProductList"
            data={this.state.data}
            image={images.poulpe.uri}/>
            <Button style={styles.button} navigation={this.props.navigation}
            text="Crustace" screen="ProductList"
            data={this.state.data}
            image={images.poulpe.uri}/>
            <Button style={styles.button} navigation={this.props.navigation}
            text="promotions" screen="ProductList"
            data={this.state.data}
            image={images.poulpe.uri}/>
            <Button style={styles.button} navigation={this.props.navigation}
            text="Retour" screen="Home"/>
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
    button: {
        height:150,
    }
});