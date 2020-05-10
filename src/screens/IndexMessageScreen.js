import React, { useContext, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Context } from 'src/context/MessageContext';
import { Feather } from '@expo/vector-icons';

//
const IndexMessageScreen = ({ navigation }) => {
  
  //
  const { state, deleteMessage, getMessages } = useContext(Context);

  useEffect(() => {
    getMessages();

    const listener = navigation.addListener('didFocus', () => {
      getMessages();
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
            <TouchableOpacity
              onPress={() => navigation.navigate('ShowMessage', { id: item.id })}
            >
              <View style={styles.row}>
                <Text style={styles.body}>
                ID: {item.id},
                Thread: {item.thread},
                Body: {item.body},
                Deleted: {item.deleted},
                Profile: {item.profile}
                </Text>
                <TouchableOpacity onPress={() => deleteMessage(item.id)}>
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

IndexMessageScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate('CreateMessage')}>
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

export default IndexMessageScreen;
