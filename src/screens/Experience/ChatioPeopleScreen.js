import React, { useContext, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity
} from 'react-native';
import { Context as ProfileProvider } from 'src/context/ProfileContext';
import { Context as ThreadProvider } from 'src/context/ThreadContext';
import { Feather } from '@expo/vector-icons';
import FindThreadForm from 'src/components/FindThreadForm';

//
const IndexProfileScreen = ({ navigation }) => {

  //
  const { state, getProfiles } = useContext(ProfileProvider);
  const { findThread } = useContext(ThreadProvider);

  useEffect(() => {
    getProfiles();

    const listener = navigation.addListener('didFocus', () => {
      getProfiles();
    });

    return () => {
      listener.remove();
    };
  }, []);

  //
  console.log("This is PROFILE STATE: " + state);

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={ profile => profile.id }
        renderItem={({ item }) => {
          return (
            <FindThreadForm
              onSubmit={findThread}
              item={item}
            />
          );
        }}
      />
    </View>
  );
};

IndexProfileScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate('CreateProfile')}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    )
  };
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'gray'
  },
  body: {
    fontSize: 18
  },
  icon: {
    fontSize: 24
  }
});

export default IndexProfileScreen;
