import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';



export const TodoList = ({ todos, onPressDelete }) =>{
  return (
    <ScrollView style={styles.scrollView}>
    {
        todos.map((todo, index) => (
            <View key={todo+index} style={styles.todoContainer}>
                <Text>{todo}</Text>
                <TouchableOpacity onPress={ () => onPressDelete(index) }>
                    <Text>DELETE</Text>
                </TouchableOpacity>
            </View>
    
        ))
    }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
scrollView: {
    backgroundColor : '#DDD',
  },
  todoContainer :{
    flexDirection: 'row',
    backgroundColor : '#FFF',
    padding :10,
    justifyContent: 'space-between'
  },
})