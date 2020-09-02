import React, { useContext, useEffect, useState } from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  NativeModules,
  Platform,
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

    //console.log("ChatioChatScreen/thread/"+thread);
    //console.log("ChatioChatScreen/contributors/"+contributors);

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

    <SafeAreaView style={{flex:1,backgroundColor:'rgb(0,0,0)'}}>

      <KeyboardAvoidingView
        style={{backgroundColor:'rgb(222,222,222)',flex:1,position:'absolute',bottom:0,width:'100%',alignItems:'center'}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        enabled
        keyboardVerticalOffset={getVerticalOffset()}
      >

        <FlatList
          style={{borderWidth:2,borderColor:'green',width:'100%',flex:1}}
          data = { state }
          keyExtractor = { message => message.id}
          renderItem = {({ item }) => {
            return (

              <View style={{borderWidth:2,borderColor:'blue',flex:1}}>

                <TouchableOpacity
                  onPress={() => navigation.navigate('ShowMessage', { id: item.id })}
                  style={{flex:1,flexDirection:'row',borderColor:'blue',borderWidth:0}}
                >

                  <View style={{flex:1,borderColor:'green',borderWidth:0,padding:10}}>

                    <View style={{borderWidth:1,borderColor:'pink'}}>
                      <Text>
                      {item.profile}
                      </Text>
                    </View>

                  </View>

                  <View style={{flex:4,borderColor:'red',borderWidth:0,flexDirection:'column'}}>

                    <View style={{borderWidth:1,borderColor:'black'}}>
                      <Text>
                      {item.profile} {moment(item.updated).fromNow()}

                      </Text>
                    </View>

                    <View style={{borderWidth:1,borderColor:'orange'}}>
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

        <View style = {{borderWidth:5,width:'100%'}}>

          <ComposeBar

            contributors={contributors}
            thread={thread}
            onSubmit={(body,contributors,thread) => {
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
