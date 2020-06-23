import React, { useContext, useEffect } from 'react';
import {
  Image,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { Context } from 'src/context/ThreadContext';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
import moment from 'moment';
import styles from 'src/values/styles';

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

    //
    return () => {

      listener.remove();

    };

  }, [])

  return (

    <View style={{flex:1,flexDirection:'row'}}>
    
      <FlatList

        data={state}
        keyExtractor={thread => thread.id}
        renderItem={({ item }) => {

          return (
            
            <View style={{flex:1,height:78}}>
              
              <TouchableOpacity style={{flex:1,flexDirection:'row',borderColor:'blue',borderWidth:2}} onPress={() => navigation.navigate('Chat', { id: item.id, contributors: item.participants.contributors })}>
                
                <View style={{flex:1,borderColor:'green',borderWidth:1}}>
                  
                  <Text>
                    [image]
                  </Text>

                </View>
                
                <View style={{flex:4,borderColor:'red',borderWidth:1,flexDirection:'column'}}>

                  <View style={{flex:1,borderColor:'pink',borderWidth:1,justifyContent:'flex-end'}}>

                    <Text>
                      Contributors: {item.participants.contributors.toString()}
                    </Text>

                  </View>

                  <View style={{flex:1,borderColor:'lime',borderWidth:1,justifyContent:'flex-start'}}>

                    <Text>
                      Preview: {item.preview} • {moment(item.when).fromNow()}
                    </Text>

                  </View>

                </View>            

              </TouchableOpacity>

            </View>

          );

        }}
      
      />

    </View>

  );

};

ChatioChatsScreen.navigationOptions = ({ navigation }) => {
  return {
    headerLeft: (
     
      <TouchableOpacity onPress={() => navigation.navigate('Profile', { id: state.id })}>

        <Image
          source={{uri : 'https://secure.gravatar.com/avatar/dbbab0050db2dbd84d4e2c844196ee0c?s=60&d=mm&r=g'}}
          style={{ width: 40, height: 40, borderRadius: 40/2, marginLeft : 15 }}
        />
      </TouchableOpacity>
    ),
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate('People')}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    )
  };
};

export default ChatioChatsScreen;
