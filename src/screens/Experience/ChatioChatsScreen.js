import React, { useContext, useState, useEffect } from 'react';
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
console.disableYellowBox = true;
import { Context as ThreadProvider } from 'src/context/ThreadContext';
//import profileGet from 'src/components/localStorage';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
import moment from 'moment';
import styles from 'src/values/styles';

//
const ChatioChatsScreen = ({ navigation }) => {

  const [profile,setProfile] = useState('');

  const getProfile = async () => {
    try {
         const result = await AsyncStorage.getItem('profile');
         console.log("//localStorage/result",result);
         setProfile(results);
         console.log("//myfirsthook",profile);
         return async (result);
      } catch(error) {
        console.log(error);
      }
  }

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
        //extraData={profile}
        keyExtractor={thread => thread.id}
        renderItem={({ item }) => {

          return (
            
            <View style={{flex:1,height:78}}>
              
              <TouchableOpacity style={{flex:1,flexDirection:'row',borderColor:'blue',borderWidth:2}} onPress={() => navigation.navigate('Chat', { id: item.id, contributors: item.participants.contributors })}>
                
                <View style={{flex:1,borderColor:'green',borderWidth:1}}>
                  
                  <Text>
                    {JSON.stringify(item.participants.contributors)}
                  </Text>

                </View>

                <View style={{flex:4,borderColor:'red',borderWidth:1,flexDirection:'column'}}>

                  <View style={{flex:1,borderColor:'pink',borderWidth:1,justifyContent:'flex-end'}}>

                    <Text>
                      {
                        item.participants.contributors.splice(item.participants.contributors.indexOf(item.participants),1,)
                      }
                    </Text>

                  </View>

                  <View style={{flex:1,borderColor:'lime',borderWidth:1,justifyContent:'flex-start'}}>

                    <Text numberOfLines = {1} ellipsizeMode = 'head'>
                      {item.preview} • {moment(item.updated).fromNow()}
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
    headerLeft: ()=>(
     
      <TouchableOpacity onPress={() => navigation.navigate('Profile', { id: state.id })}>

        <Image
          source={{uri : 'https://io-venny-api.imgix.net/images/16177718_10154838094185396_8364198342188418754_o.png'}}
          style={{ width: 40, height: 40, borderRadius: 40/2, marginLeft : 15 }}
        />
      </TouchableOpacity>
    ),
    headerRight: ()=>(
      <TouchableOpacity onPress={() => navigation.navigate('People')}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    )
  };
};

export default ChatioChatsScreen;
