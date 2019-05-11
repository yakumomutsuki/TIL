import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { TodoList } from './src/components/atoms/TodoList'

export default class App extends Component {
  state = {
    newTodo : '',
    todos :[],

  };

  onChangeText(newTodo){
    this.setState({ newTodo })
  }

  onPressAdd(){
    const { newTodo } = this.state;
    this.setState({
        newTodo : '',
        todos : [newTodo, ...this.state.todos]
    })
  }

  onPressDelete(index){
    this.setState({
      todos : this.state.todos.filter((todo, i) => i !== index)
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.newTodo}
          style={styles.form}
          onChangeText={text => this.onChangeText(text)}
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={ () => this.onPressAdd()}
        >
          <Text style={styles.addButtonText}>ADD</Text>
        </TouchableOpacity>
        <TodoList 
          todos={ this.state.todos } 
          onPressDelete={ (index) => this.onPressDelete(index)}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:30,
  },
  form: {
    backgroundColor: '#EEE',
    padding: 10,
  },
  addButton: {
    backgroundColor: '#333',
    padding: 14,
    borderRadius: 4,
    marginTop : 10
  },
  addButtonText: {
    color: '#FFF',
    textAlign: 'center',
  },
});
