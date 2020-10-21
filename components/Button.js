import React from 'react';
import {View , Text ,StyleSheet, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import { lessThan } from 'react-native-reanimated';

 export default function Button(props){
    return <TouchableOpacity style={styles.container}
        onPress={()=>props.navigation.navigate(props.screen, {data: props.data? props.data: []})}>
        {props.image &&
            <Image source={props.image} style={{width:50, height:50, marginRight:10}}/>
        }
        <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
 }

 const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: '#bbb',
        // alignItems: 'center',
        // margin:5,
        // padding:40,
        // flexDirection:"row",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#5583a4",
        padding: 10,
        opacity: 0.5,
        margin: 5,
        
    }
 })