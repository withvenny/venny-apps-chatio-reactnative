import React, { useContext, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { Context } from 'src/context/ThreadContext';
import { Feather } from '@expo/vector-icons';
import moment from 'moment';

//
const ChatioChatsScreen = ({ navigation }) => {
  
  //
  const { state, deleteThread, getThreads } = useContext(Context);

  //
  useEffect(() => {


    //
    getThreads();

    //
    const listener = navigation.addListener('didFocus', () => {
      getThreads();
    });

    return () => {
      listener.remove();
    };
  }, [])

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={thread => thread.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('Chat', { id: item.id, contributors: item.participants.contributors })}>
              <View style={styles.row}>
                <View><Text style={styles.body}>ID: {item.id}</Text></View>
                <View><Text style={styles.body}>Preview: {item.preview}</Text></View>
                <View><Text style={styles.body}>Title: {item.title}</Text></View>
                <View><Text style={styles.body}>Contributors: {item.participants.contributors.toString()}</Text></View>
                <View><Text style={styles.body}>When: {moment(item.when).fromNow()}</Text></View>

            </View>            
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

ChatioChatsScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate('People')}>
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
  },
  littleStyle: {
    fontSize: 30,
    textDecorationLine: 'underline',
  }
});

export default ChatioChatsScreen;
