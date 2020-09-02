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
import AsyncStorage from '@react-native-community/async-storage';
console.disableYellowBox = true;
import { Context as ThreadProvider } from 'src/context/ThreadContext';
import { Context as AuthProvider } from 'src/context/AuthContext';
import { Feather } from '@expo/vector-icons';
//import { getData } from 'src/components/localStorage';
import moment from 'moment';
import styles from 'src/values/styles';

//
console.log("==========",Date(),"==========");

//
const ChatioChatsScreen = ({ navigation }) => {

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

  //
  //const profile = async () => AsyncStorage.getItem('profile', (err, profile) => {console.log(profile);return profile;});
  //const alias = async () => AsyncStorage.getItem('alias', (err, alias) => {console.log(alias);return alias;});


  const users = [{
    "name": "John",
    "color": "blue",
  },{
    "name": "Tim",
    "color": "red",
  },{
    "name": "Mike",
    "color": "green",
  }];
  
  const contributor_names = item.contributors.map(item => item.alias).join(', ');
  console.log(contributor_names);
  const alias = AsyncStorage.getItem('alias', (err, alias) => {console.log(alias);return alias;});
  //console.log(alias);
  
      getValueLocally=(array)=>{
  
  //AsyncStorage.getItem('Key_27').then((value) => this.setState({ getValue : value }))
  const alias = AsyncStorage.getItem('alias', (err, alias) => {console.log(alias);return alias;});
  array.filter((item)=>!alias.includes(item))
  
  }

  return (

    <View style={{flex:1,flexDirection:'row'}}>
    
      <FlatList

        data={state}
        //extraData={alias}
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
                        contributor_names
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
          source={{uri: 'https://io-venny-api.imgix.net/images/16177718_10154838094185396_8364198342188418754_o.png'}}
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
