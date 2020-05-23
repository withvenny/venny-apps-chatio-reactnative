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
import { Feather } from '@expo/vector-icons';

//
const IndexProfileScreen = ({ navigation }) => {
  
  //
  const { state, getProfiles } = useContext(ProfileProvider);

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
        keyExtractor={followship => followship.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={
                () => navigation.navigate('Compose', { id: item.id })
              }
            >
              <View style={styles.row}>
                <Text style={styles.body}>
                ID: {item.id},
                Bio: {item.bio},
                Headline: {item.headline},
                Access: {item.access},
                Status: {item.status}
                </Text>
              </View>
            </TouchableOpacity>
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
