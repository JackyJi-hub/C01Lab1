import React, { useState } from "react";
import { Button, TextInput, View, StyleSheet } from "react-native";

const AddTask = (onAddTask) => {
    const [title, setTitle] = useState("")

    const handleAddTask = () => {
        if (title != ""){
            onAddTask.onAddTask(title)
            setTitle("")
        }
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

    return <View style={styles.todoListContainer}>
        <TextInput style={styles.todoListContainer} value={title} onChangeText={setTitle} placeholder="Enter your text here"/>
        <Button title="Add Task" onPress={handleAddTask}/>
    </View>
}

export default AddTask

