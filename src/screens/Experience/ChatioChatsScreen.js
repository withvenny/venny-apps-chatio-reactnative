import React, { useContext, useEffect } from 'react';
import {
  Alert,
  AsyncStorage,
  Image,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { Context as ThreadProvider } from 'src/context/ThreadContext';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
import moment from 'moment';
import styles from 'src/values/styles';

//
const ChatioChatsScreen = ({ navigation }) => {

  AsyncStorage.getItem('profile').then((profile) => {

    if (profile !== null) {
        var profile = AsyncStorage.getItem('profile');
        console.log("profile", profile);
    }

  });

AsyncStorage.getItem('token').then((token) => {

  if (token !== null) {
      console.log("token", token);
  }
});

  //
  const { state, deleteThread, getThreads } = useContext(ThreadProvider);

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
                    {item.participants.contributors.toString()}
                  </Text>

                </View>

                <View style={{flex:4,borderColor:'red',borderWidth:1,flexDirection:'column'}}>

                  <View style={{flex:1,borderColor:'pink',borderWidth:1,justifyContent:'flex-end'}}>

                    <Text>
                      Contributor(s): {item.participants.contributors.filter(item => !'prf_4dd2cf3c19bc2'.includes(item))}
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
          source={{uri : 'https://io-venny-api.imgix.net/images/16177718_10154838094185396_8364198342188418754_o.png'}}
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
