import react from 'react';
import React from 'react';
import {View , Text ,StyleSheet, Image, TouchableOpacity} from 'react-native';
import {images} from '../constants/Images';
import {connect} from 'react-redux';
import {addProduct, removeProduct} from '../store/action/cartAction'

class Product extends React.Component {
    isInCart(){
        let result = this.props.products.filter(value=>{
            return value.name==this.props.item.name;
        })
        return result.length>0;
    }
    
    render ()
    {
  return <TouchableOpacity style={styles.container}
    onPress={()=> {
        if(!this.isInCart()) {
            this.props.addProduct(this.props.item);

        } else {
            this.props.removeProduct(this.props.item);
        }
    } }
    >
            <Image style={styles.image} 
            source={images.poulpe.uri}></Image>
            <Text>{this.props.item.name} </Text>
            <Text>{this.isInCart()&& "\tAjouté\t"}</Text>
            <Text style= {styles.text}>{this.props.item.price}€</Text>
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

const mapStateToProps = state => {
    return {
        products: state.cart.products
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addProduct: data => {dispatch(addProduct(data));},
        removeProduct: data => {dispatch(removeProduct(data));},
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);