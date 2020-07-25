import React, { useContext, useState, useEffect } from 'react';
import {
  Alert,
  Image,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
console.disableYellowBox = true;
import { Context as ThreadProvider } from 'src/context/ThreadContext';
import { Feather } from '@expo/vector-icons';
import { 
  getProfile,
  profileGet
} from 'src/components/localStorage';
import moment from 'moment';
import styles from 'src/values/styles';

  //
  //const { profile } = profileGet();
  //console.log("==========",Date(),"==========");
  //console.log("//ChatioChatsScreen/profile",profile);

//
const ChatioChatsScreen = ({ navigation }) => {

  //
  const { state, deleteThread, getThreads } = useContext(ThreadProvider);
  const currentUser1 = getProfile();
  const currentUser2 = profileGet();
  console.log(currentUser1,currentUser2);

  //
  useEffect(() => {

    //
    getThreads();
    //profileGet();

    //
    const listener = navigation.addListener('didFocus', () => {

      getThreads();
      //profileGet();

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
        //extraData={props}
        keyExtractor={thread => thread.id}
        renderItem={({ item }) => {

          return (
            
            <View style={{flex:1,height:78}}>
              
              <TouchableOpacity
                style={{flex:1,flexDirection:'row',borderColor:'blue',borderWidth:0}}
                onPress={() => navigation.navigate('Chat', { id: item.id, contributors: item.participants.contributors })}
              >
                
                <View style={{flex:1,borderColor:'green',borderWidth:0,padding:10}}>
                  
                  <Text>
                  {item.profile}
                  </Text>

                </View>

                <View style={{flex:4,borderColor:'red',borderWidth:0,flexDirection:'column'}}>

                  <View style={{flex:1,borderColor:'pink',borderWidth:0,justifyContent:'flex-end'}}>

                    <Text style={{fontWeight:'bold',fontSize:18}}>
                      {
                        //item.participants.contributors.filter(item=>!profile.includes(item))
                      }
                      {
                        //item.participants.contributors.filter(item=>item !== item.profile)
                      }
                      {
                        item.participants.contributors
                      }
                    </Text>

                  </View>

                  <View style={{flex:1,borderColor:'lime',borderWidth:0,justifyContent:'flex-start', paddingRight:10}}>

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
