import React from 'react';
import {View , Text ,StyleSheet, Image} from 'react-native';
// import BackgroundImage from '../components/BackgroundImage';
import Button from "../components/Button";
import { getResources } from '../services/apirest';
// import {images} from '../Constants/Images';



export default class Restaurants extends React.Component {
     state = {
         data : []
     }
     componentDidMount() {
         getResources('Restaurants').then(response=> {
             this.setState({data:response})
         })
     }
render() {
  return <View style= {styles.container}> 
            <Text >Page Restaurants</Text>
            <Button navigation={this.props.navigation}
            text="Product List" screen="ProductList"
            data={this.state.data}/>
            <Button navigation={this.props.navigation}
            text="Retour" screen="Home"/>
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