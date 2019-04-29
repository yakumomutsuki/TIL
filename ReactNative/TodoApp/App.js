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
        newTodo : newTodo,
        todos : [newTodo, ...this.state.todos]
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
        <ScrollView style={styles.scrollView}>
            {
                this.state.todos.map((todo, index) => (
                    <View key={todo+index} style={styles.todoContainer}>
                        <Text>{todo}</Text>
                    </View>

                ))
            }
        </ScrollView>
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
  scrollView: {
    backgroundColor : '#DDD',
  },
  todoContainer :{
    backgroundColor : '#FFF',
    padding :10,
  },
});
