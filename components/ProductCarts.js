import React from 'react';
import {View , Text ,StyleSheet, Image, TouchableOpacity, Alert} from 'react-native';
import {images} from '../constants/Images';
import Button from '../components/Button'

export default class ProductCarts extends React.Component {
    state = {
        quantity : 1
    }

    clickProduit(){
        Alert.alert(
            "Choisisser la quantite",
      "Choisisser la quantite",
      [
        {
          text: "1",
          onPress: () => this.setState({
            quantity: (1)
          }),
        },
        { text: "2", onPress: () =>  this.setState({
            quantity: (2)
          })},
          { text: "3", onPress: () =>  this.setState({
            quantity: (3)
          })},
          { text: "4", onPress: () =>  this.setState({
            quantity: (4)
          })},
          { text: "5", onPress: () =>  this.setState({
            quantity: (5)
          })}

      ],
      { cancelable: false }
    );

    }
    render ()
    {
        return <TouchableOpacity style={styles.container}
        onPress={()=> {
            this.clickProduit();
    
        } }>
            <Image style={styles.image} 
            source={images.poulpe.uri}></Image>
            <Text>{this.props.item.name} </Text>
            <Text style= {styles.text}>{this.props.item.price}€</Text>
            <Text>{this.state.quantity} </Text>
            </TouchableOpacity>
    }
}

const styles = StyleSheet.create({
    container : {
        //flex : 1,
        flexDirection: "row",
        padding: 10,
        margin: 5,
        backgroundColor:"#bbb",
        //justifyContent: 'space-between'
    },
    text : {
        
    },
    image : {
        marginRight: 10,
        width:50,
        height:50
    },
});