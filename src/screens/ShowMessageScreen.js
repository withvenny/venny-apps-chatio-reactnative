import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context as MessageProvider } from 'src/context/MessageContext';
import { EvilIcons } from '@expo/vector-icons';

//
const ShowMessageScreen = ({ navigation }) => {

  //
  const { state } = useContext(MessageProvider);
  
  //console.log(useContext(Context));

  //
  const message = state.find(
    message => message.id === navigation.getParam('id')
  );

  return (
    <View>
      <Text>ID: {message.id}</Text>
      <Text>Thread: {message.thread}</Text>
      <Text>Body: {message.body}</Text>
      <Text>Deleted: {message.deleted}</Text>
    </View>
  );
};

ShowMessageScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('EditMessage', { id: navigation.getParam('id') })
        }
      >
        <EvilIcons name="pencil" size={35} />
      </TouchableOpacity>
    )
  };
};

const styles = StyleSheet.create({});

export default ShowMessageScreen;
