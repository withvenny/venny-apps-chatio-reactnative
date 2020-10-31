import React, { useContext, useEffect, useState } from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  NativeModules,
  Platform,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { Context } from 'src/context/MessageContext';
import { Feather } from '@expo/vector-icons';
import ComposeBar from 'src/components/ComposeBar';
import moment from 'moment';

const { StatusBarManager } = NativeModules;

let statusBarHeight = 0;
if (Platform.OS === 'ios') {
  StatusBarManager.getHeight((statusBarFrameData) => {
    statusBarHeight = statusBarFrameData.height;
  });
}

// Could be nav bar height?
// Magic number but is necessary to work properly
const IOS_OFFSET = 44;

//
const getVerticalOffset = () => Platform.select({
  ios: statusBarHeight + IOS_OFFSET,
  android: 0
});

//
const ChatioChatScreen = ({ navigation }) => {

  //
  const thread = navigation.getParam('id');
  const contributors = navigation.getParam('contributors');
  const { state, deleteMessage, getMessages, composeMessage } = useContext(Context);
  
  //
  useEffect(() => {

    //console.log("//ChatioChatScreen/thread/"+thread);
    //console.log("//ChatioChatScreen/contributors/"+contributors);
    //console.log("//state/"+JSON.stringify(state));

    getMessages(thread);

    //
    const listener = navigation.addListener('didFocus', () => {

      //
      getMessages(thread);

    });

    //
    return () => {

      //
      listener.remove();

    };

  }, [])

  //
  return (

    <SafeAreaView style={{flex:1,borderWidth:5,backgroundColor:'rgb(255,255,255)'}}>

      <KeyboardAvoidingView
        style={{backgroundColor:'rgb(222,222,222)',flex:1,position:'absolute',bottom:0,width:'100%',alignItems:'center'}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        enabled
        keyboardVerticalOffset={getVerticalOffset()}>

        <FlatList
          style={{borderWidth:0,borderColor:'green',width:'100%',flex:1}}
          data = { state }
          inverted
          keyExtractor = { message => message.id}
          renderItem = {({ item }) => {

            if(item.profile[0].images.profile.default) {
            var source = 'https://io-venny-api.imgix.net/images/' + item.profile[0].images.profile.default;
          } else {
            var source = 'https://io-venny-api.imgix.net/images/imgix-error.png';
          }

            return (

              <View style={{flex:1,borderWidth:0,borderColor:'blue',flex:1}}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('ShowMessage', { id: item.id })}
                  style={{flex:1,flexDirection:'row',borderColor:'blue',borderWidth:0}}
                >

                  <View style={{flex:1,borderColor:'green',borderWidth:0,padding:10}}>

                    <View style={{borderWidth:0,borderColor:'pink'}}>
                      <Image
                        style={{ borderWidth:0,borderColor:'black', width: 50, height: 50, borderRadius: 40/10, /*marginLeft : 10*/ }}
                        source={{uri:source}}
                      />
                    </View>

                  </View>

                  <View style={{flex:7,borderColor:'red',borderWidth:0,flexDirection:'column'}}>

                    <View style={{borderWidth:0,borderColor:'pink'}}>

                      <View style={{borderWidth:0,borderColor:'black',flexDirection:'row',marginTop:8}}>
                        <Text style={{fontSize:16,fontWeight:'bold',marginRight:5}}>{item.profile[0].alias}</Text>
                        <Text style={{fontSize:12,marginTop:3}}>{moment(item.updated).fromNow()}</Text>
                      </View>

                    </View>

                    <View style={{borderWidth:0,borderColor:'orange'}}>
                      <Text>
                      {item.body}
                      </Text>
                    </View>

                  </View>

                </TouchableOpacity>
              
              </View>
              
            );

          }}

        />

        <View style = {{borderWidth:0,width:'100%'}}>

          <ComposeBar

            contributors={contributors}
            thread={thread}
            onSubmit={(body,contributors,thread) => {
              Keyboard.dismiss(),
              composeMessage(
                body,
                contributors,
                thread,
                () => navigation.jumpTo('Chat', { id: thread, contributors: contributors })
              );
            }}

          />

        </View>

      </KeyboardAvoidingView>
      
    </SafeAreaView>

  );

};

//
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

export default ChatioChatScreen;
