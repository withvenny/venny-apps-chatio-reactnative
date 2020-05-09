import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context as ProfileProvider } from '../context/ProfileContext';
import { EvilIcons } from '@expo/vector-icons';

//
const ShowProfileScreen = ({ navigation }) => {

  //
  const { state } = useContext(ProfileProvider);
  
  //console.log(useContext(Context));

  //
  const post = state.find(
    post => post.id === navigation.getParam('id')
  );

  return (
    <View>
      <Text>ID: {post.id}</Text>
      <Text>Bio: {post.bio}</Text>
      <Text>Headline: {post.headline}</Text>
      <Text>Status: {post.status}</Text>
      <Text>Access: {post.access}</Text>
      <Text>Profile: {post.profile}</Text>
    </View>
  );
};

ShowProfileScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('EditProfile', { id: navigation.getParam('id') })
        }
      >
        <EvilIcons name="pencil" size={35} />
      </TouchableOpacity>
    )
  };
};

const styles = StyleSheet.create({});

export default ShowProfileScreen;
