import React from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function SingleTodo({todo, deleteHandle}){
    return(
       <TouchableOpacity onPress={() => deleteHandle(todo.key)}>
            <Text style={styles.listText}>{todo.text}</Text>
       </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listText:{
        padding:18,
        marginTop:10,
        borderStyle:"dashed",
        borderWidth:1,
        borderRadius:10
        
      }
})