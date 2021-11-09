import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header(){
    return(
        <View style={styles.title}>
            <Text style={styles.text}>My Todos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        alignItems: 'center',
        backgroundColor:'coral',
    },
    text:{
        fontSize:24,
        padding:16,
    }
})