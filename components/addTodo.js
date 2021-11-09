import React, { useState } from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';

export default function AddTodo({inputTextHandler}){

    const [addTodo, setAddTodo] = useState([])

    const inputHandler = (val) => {
        setAddTodo(val)
    }

    return(
        <View style={styles.form}>
            <TextInput
                style={styles.input}
                placeholder='e.g.Todo 1'
                onChangeText={inputHandler}
            />
            <Button onPress={() => inputTextHandler(addTodo)} title='ADD TODO' color='coral' />
        </View>
    )
}
const styles = StyleSheet.create({
    form:{
        marginHorizontal:40,
        marginTop:30,
        marginBottom:10,
    },
    input:{
        borderBottomColor:'#ccc',
        borderBottomWidth:1,
        paddingLeft:16,
        marginBottom:15,
    }
})