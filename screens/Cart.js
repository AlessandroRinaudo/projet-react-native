import React from 'react';
import {View , Text ,StyleSheet, Image} from 'react-native';

export default class Cart extends React.Component {
render() {
  return <View style= {styles.container}> 
        <Text> Cart page</Text>
    </View>
    }
}
const styles = StyleSheet.create({
    container : {
        flex : 1,
    },
});