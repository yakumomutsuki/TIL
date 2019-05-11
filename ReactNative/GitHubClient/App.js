/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList
} from 'react-native';

export default class App extends Component {

  state = {
    items : []
  }
  page = 0;

  fetchRepositories(){
    const newPage = this.page + 1; 
    fetch(`https://api.github.com/search/repositories?q=react&page=${newPage}`)
    .then(response => response.json())
    .then(({items}) => {
      this.page = newPage;
      this.setState({ items: [...this.state.items, ...items] })
    })
  }

  render() {
    return (
      <View style={styles.container}>
      <TouchableOpacity style={{ marginTop: 100 }}  onPress={() => this.fetchRepositories()}>
        <Text>Ftech</Text>
      </TouchableOpacity>
      <FlatList
       data={this.state.items}
       renderItem={({ item }) => <Text style={{padding :10}}>{item.name}</Text>}
       keyExtractor={(item) => item.id}
       onEndReached={()=> this.fetchRepositories()}
       onEndReachedThreshold={0.1}
       />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
