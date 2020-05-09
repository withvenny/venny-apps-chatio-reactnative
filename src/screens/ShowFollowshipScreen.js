import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context as FollowshipProvider } from '../context/FollowshipContext';
import { EvilIcons } from '@expo/vector-icons';

const ShowFollowshipScreen = ({ navigation }) => {
  const { state } = useContext(FollowshipProvider);

  //console.log(state);

  const followship = state.find(
    followship => followship.id === navigation.getParam('id')
  );

  return (
    <View>
      <Text>ID: {followship.id}</Text>
      <Text>sender: {followship.sender}</Text>
      <Text>recipient: {followship.recipient}</Text>
      <Text>status: {followship.status}</Text>
      <Text>Profile: {followship.profile}</Text>
    </View>
  );
};

ShowFollowshipScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('EditFollowship', { id: navigation.getParam('id') })
        }
      >
        <EvilIcons name="pencil" size={35} />
      </TouchableOpacity>
    )
  };
};

const styles = StyleSheet.create({});

export default ShowFollowshipScreen;
