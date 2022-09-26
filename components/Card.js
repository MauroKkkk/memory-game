import React from "react";
import { View, StyleSheet, TouchableOpacity} from "react-native";

export default function Card(props){
    return(
        <TouchableOpacity
            onPress={props.onPress}
        >
            <View style = {[styles.container,
            {
                backgroundColor: props.color
            }    
        ]}>        
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        height: 70,
        width: 40,
        margin: 5,
        borderRadius: 5
    }
})