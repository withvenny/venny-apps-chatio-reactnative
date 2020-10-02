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

  return (

    <View style={{flex:1,flexDirection:'row'}}>
    
      <FlatList

        data={state}
        //extraData={alias}
        keyExtractor={thread => thread.id}
        renderItem={({ item }) => {

          var empIds = item.profile;

          var contributor_others = item.contributors.filter(function(itm){
            return empIds.indexOf(itm.id);
          });

          //const contributors_names = contributor_name_list.filter(item=>!profile.includes(item))
          var contributor_names = contributor_others.map(item => item.alias).join(', ');
          //console.log(contributor_name_list);
          //const profile=item.profile

          //console.log(contributor_names);

          //var data = { contributors : [{"id":"prf_0b9f8467d0bd4","images":"{}","alias":"dontsayhisname"},{"id":"prf_8072738b47905","images":{"profile":{"list":["img_0001","img_0002","img_0003","img_0004"],"default":"img_0001"},"cover":{"list":["img_0005","img_0006","img_0007","img_0008"],"default":"img_0005"}},"alias":"sonofadolphus"}]}
          //var data = Object.assign({"contributors":"wait"},item.contributors);
          //var data = item.contributors;
          //console.log(data);
          //var empIds = item.profile;
          //var filteredArray = data.contributors

          //console.log("LOG",contributor_others);
          //console.log("contributor_others//",JSON.stringify(contributor_others[0]));
          //const others = contributor_others[0];
          //console.log("others//",others.alias);
          //console.log("contributor_names//",JSON.stringify(contributor_names));
          //console.log("item.contributors//",JSON.stringify(item.contributors b));

          //alert(typeof contributor_others);

          //filteredArray = { records : filteredArray };

          if(contributor_others.images){
            var source = 'https://io-venny-api.imgix.net/images/'+contributor_others.images.profile.default;
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
