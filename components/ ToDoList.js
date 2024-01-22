import React, {useState} from "react";
import { Button, View, StyleSheet, Text } from "react-native";
import {v4 as uuidv4} from 'uuid'
import AddTask from "./AddTask";

const ToDoList = (tasks) => {
    const [toDos, setToDos] = useState([])

    const addToDo = (newTitle) => {
        setToDos([...toDos, {id: uuidv4(), title: newTitle}])

        
    }
    
    const removeToDo = (id) => {
        setToDos((prevToDos) => prevToDos.filter((task) => task.id != id))
    }

    const styles = StyleSheet.create({
        todoListContainer: {
          margin: 10,
        },
        todoItem: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 10,
          marginVertical: 5,
          borderColor: 'gray',
          borderWidth: 1,
          borderRadius: 5,
        },
    });

    return (
        <View style={styles.todoListContainer}> 
        <AddTask onAddTask={addToDo}/>
        {toDos.map((item, index) => {
             return (
                <View style={styles.todoItem} key={item.id}>
                    <Text>
                        {item.title}
                    </Text>
                    <Button title="Remove" onPress={() => removeToDo(item.id)}/> 
                </View>
                
        )})}
        </View>
    )
    
    
    
}

export default ToDoList



