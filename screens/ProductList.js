import React from 'react';
import {View , Text ,StyleSheet} from 'react-native';
// import BackgroundImage from '../components/BackgroundImage';
import Button from "../components/Button";
// import {images} from '../Constants/Images';
import Product from '../components/Products'



export default class ProductsList extends React.Component {
    render() {
        let products = this.props.route.params.data ? this.props.route.params.data : [];
  return <View style= {styles.container}> 
            {/* <Header navigation={this.props.navigation}/> */}
            <Text style ={{marginVertical : 10 , textAlign:"center"}}> Choisissez vos produits </Text>
            <View style={{flex:1}}>
            {products.map((value,index)=> {
                return <Product key ={index} item={value}/>
            })}
            </View>
         </View>
    }
}
const styles = StyleSheet.create({
    container : {
        flex : 1,
        color:'black',
        alignItems: 'center',
        justifyContent : 'center',
    },
    });

