import React, { useContext, useState, useEffect } from 'react';
import {
  Alert,
  Image,
  FlatList,
  StyleSheet,
  Text,
  RefreshControl,
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
  //console.log("//state/",JSON.stringify(state));

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
        //extraData={alias}
        //refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        keyExtractor={thread => thread.id}
        renderItem={({ item }) => {

          var empIds = item.profile;

          var contributor_others = item.contributors.filter(function(itm){
            return empIds.indexOf(itm.id);
          });

          var contributor_names = contributor_others.map(item => item.alias).join(', ');

          //console.log("//contributor_others",contributor_others);
          //console.log(contributor_names);

          /* http://jsonpath.herokuapp.com/ */

          //var contributor_other = contributor_others[0];

          //console.log(typeof contributor_other);
          //var property = 'alias';
          //console.log(contributor_other);
          //console.log(Object.keys(contributor_others));
          //if(contributor_other.images.profile.hasOwnProperty('default')){console.log("TRY NOW",contributor_other.images.profile.default)}else{console.log("no eggs")}
          if(contributor_others[0].images.profile.default) {
            var source = 'https://io-venny-api.imgix.net/images/' + contributor_others[0].images.profile.default;
          } else {
            var source = 'https://io-venny-api.imgix.net/images/imgix-error.png';
          }

          return (
            
            <View style={{flex:1,height:78}}>
              
              <TouchableOpacity
                style={{flex:1,flexDirection:'row',borderColor:'blue',borderWidth:0}}
                onPress={() => navigation.navigate('Chat', { id: item.id, contributors: item.participants.contributors })}
              >
                
                <View style={{flex:1,borderColor:'green',borderWidth:0,padding:10}}>

                  <Image
                    style={{ width: 50, height: 50, marginBottom: 15 }}
                    source={{uri:source}}
                  />

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
          source={{uri: 'https://io-venny-api.imgix.net/images/sonofadolphus.jpg'}}
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
