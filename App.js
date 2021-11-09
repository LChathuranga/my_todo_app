import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from './components/header';
import SingleTodo from './components/singleTodo';

export default function App() {

  const [todos, setTodos] = useState([
    {text:'make a tea', key:'1'},
    {text:'go a trip', key:'2'},
    {text:'bathing', key:3}
  ])

  const deleteHandle = (id) => {
    console.log(id)
    setTodos((prevTodo) => {
      return (
        prevTodo.filter(item => item.key != id)
      )
    })
  }

  return (
    <View style={styles.container}>
      <View>
        <Header/>
        <View>
          <Text>inputs</Text>
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  list:{
    margin:40,
  },
  
});
