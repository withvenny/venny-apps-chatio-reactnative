import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context as PostProvider } from '../context/PostContext';
import { EvilIcons } from '@expo/vector-icons';

//
const ShowPostScreen = ({ navigation }) => {

  //
  const { state } = useContext(PostProvider);
  
  //console.log(useContext(Context));

  //
  const post = state.find(
    post => post.id === navigation.getParam('id')
  );

  return (
    <View>
      <Text>ID: {post.id}</Text>
      <Text>Body: {post.body}</Text>
      <Text>Closed: {post.closed}</Text>
      <Text>Deleted: {post.deleted}</Text>
      <Text>Access: {post.access}</Text>
      <Text>Host: {post.host}</Text>
      <Text>Profile: {post.profile}</Text>
    </View>
  );
};

ShowPostScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('EditPost', { id: navigation.getParam('id') })
        }
      >
        <EvilIcons name="pencil" size={35} />
      </TouchableOpacity>
    )
  };
};

const styles = StyleSheet.create({});

export default ShowPostScreen;
