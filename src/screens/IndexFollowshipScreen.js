import React, { useContext, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity
} from 'react-native';
import { Context } from '../context/FollowshipContext';
import { Feather } from '@expo/vector-icons';

//
const IndexFollowshipScreen = ({ navigation }) => {
  
  //
  const { state, deleteFollowship, getFollowships } = useContext(Context);

  useEffect(() => {
    getFollowships();

    const listener = navigation.addListener('didFocus', () => {
      getFollowships();
    });

    return () => {
      listener.remove();
    };
  }, []);

  //
  console.log("This is followship state: " + state);

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={followship => followship.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('ShowFollowship', { id: item.id })}
            >
              <View style={styles.row}>
                <Text style={styles.body}>
                {item.id},{item.sender},{item.recipient},{item.status}
                </Text>
                <TouchableOpacity onPress={() => deleteFollowship(item.id)}>
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

IndexFollowshipScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate('CreateFollowship')}>
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

export default IndexFollowshipScreen;
