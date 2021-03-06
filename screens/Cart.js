import React from 'react';
import {View , Text ,StyleSheet, Image} from 'react-native';
import BackgroundImage from '../components/BackgroundImage';
import Button from "../components/Button";
// import {images} from '../Constants/Images';
import Product from '../components/Products'
import Headers from "../components/Headers";
import {connect} from 'react-redux';
import {addProduct, removeProduct} from '../store/action/cartAction'
import ProductCarts from '../components/ProductCarts'

class Cart extends React.Component {
    state = {
        products: [],
        prixTotal : 0
    }
    productExist = false;
    updateState (name, quantity, price) {
        this.productExist = false;
        this.state.products.map((value,index)=> {
            if(value.name == name){
                this.productExist = true;
            }
        })
        if(this.productExist == false){
            this.setState({products:[...this.state.products,{"name" : name, "quantity" : quantity, "price" : price}]})
        }
        else{
            this.state.products.map((value,index)=> {
                if(value.name == name){
                    value.quantity = quantity;
                }
            })
        }
        this.updatePrixTotal()
    }
    updatePrixTotal(){
        this.setState({prixTotal: 0})
        this.state.products.map((value,index)=> {
            this.setState({prixTotal: this.state.prixTotal + (value.quantity * value.price)})
        })
    }
render() {
    return <View style= {styles.container}> 
                <BackgroundImage>
                <Headers  navigation={this.props.navigation}></Headers>
                    <Text style ={styles.displayProduit}> Modifier la quantite en tapant sur chaque produits </Text>
                    <View style= {styles.buttons} >
                    {this.props.products.map((value,index)=> {
                        return <ProductCarts updateParentState={this.updateState.bind(this)}
                        key={index} item={value}/>
                    })}
                    <Text>Total {this.state.prixTotal} €</Text>
                    </View>
                </BackgroundImage>
            </View>
    }
}

const mapStateToProps = state => {
    return {
        products: state.cart.products
    }
};

export default connect(mapStateToProps)(Cart);

const styles = StyleSheet.create({
    container : {
        flex : 1,
        //justifyContent : 'center',
        justifyContent: 'space-between',
        marginTop: 50,
    },
    displayProduit: {
        padding:10,
        textAlign:"center",
        backgroundColor: "#71c1fc",
        height:50
    },
    buttons:{
        flex:1,
        marginTop:15,
        flexDirection:"column",
        opacity:0.5,
        height:10
    }
});