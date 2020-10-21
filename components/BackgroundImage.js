import react from 'react';
import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

export default class BackgroundImage extends react.Component {
    render(){
        return <View style={styles.container}>
            <Image
                style={styles.image} 
                source={require('../assets/background.png')} />
            {this.props.children}
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      height: "100%",
    },
    image: {
        flex: 1,
        position: 'absolute',
        alignItems: 'center',
        justifyContent : 'center',
        zIndex: 0,
        width: "100%",
        height: "100%",
    },
});