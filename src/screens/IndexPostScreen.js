import React, { useContext, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity
} from 'react-native';
import { Context } from '../context/PostContext';
import { Feather } from '@expo/vector-icons';

//
const IndexPostScreen = ({ navigation }) => {
  
  //
  const { state, deletePost, getPosts } = useContext(Context);

  useEffect(() => {
    getPosts();

    //console.log("NOOOOOO! STATE OF MIND: "+state[0]);

    const listener = navigation.addListener('didFocus', () => {
      getPosts();
    });

    return () => {
      listener.remove();
    };
  }, []);

  //
  //console.log("This is POST STATE: " + state);

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={post => post.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('ShowPost', { id: item.id })}
            >
              <View style={styles.row}>
                <Text style={styles.body}>
                  {item.body} - {item.id}
                </Text>
                <TouchableOpacity onPress={() => deletePost(item.id)}>
                  <Feather style={styles.icon} name="trash" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

IndexPostScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate('CreatePost')}>
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

export default IndexPostScreen;
