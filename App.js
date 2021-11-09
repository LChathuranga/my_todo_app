import React, { useState } from 'react';
import { Alert, FlatList, Keyboard, StyleSheet, Text,  TouchableWithoutFeedback,  View } from 'react-native';
import AddTodo from './components/addTodo';
import Header from './components/header';
import SingleTodo from './components/singleTodo';

export default function App() {

  const [todos, setTodos] = useState([
    {text:'make a tea', key:'1'},
    {text:'go a trip', key:'2'},
    {text:'bathing', key:3}
  ])

  const inputTextHandler = (todo) => {
    if(todo.length>5){
      setTodos((prevTodo) => {
        return [
          {text:todo, id:Math.random()},
          ...prevTodo,
        ]
      })
    }else{
      Alert.alert('OOPS!', 'Todo musu over than 3 char', [
        {text:'Understood', onPress:()=>console.log('alert closed')}
      ])
    }
  }

  const deleteHandle = (id) => {
    setTodos((prevTodo) => {
      return (
        prevTodo.filter(item => item.key != id)
      )
    })
  }

  return (
    <TouchableWithoutFeedback onPress={() =>
      Keyboard.dismiss()
    }>
      <View style={styles.container}>
      <View style={styles.flex}>
        <Header/>
        <View>
          <AddTodo inputTextHandler={inputTextHandler} />
        </View>
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({item}) => {
              return (
                <SingleTodo 
                  todo={item}
                  deleteHandle={deleteHandle} 
                />
              )
            }}
          />
        </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  list:{
    margin:40,
    flex:1,
  },
  flex:{
    flex:1,
  }
  
});
