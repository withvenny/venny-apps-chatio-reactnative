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

      <KeyboardAvoidingView style={{flex:1,backgroundColor:'rgb(222,222,222)'}} behavior="padding">

        <FlatList
          data = { state }
          keyExtractor = { message => message.id}
          renderItem = {({ item }) => {
            return (

              <View style={{flex:1,height:46}}>

                <TouchableOpacity
                  onPress={() => navigation.navigate('ShowMessage', { id: item.id })}
                  style={{flex:1}}
                >

                  <View>

                    <View>
                      <Text>
                        {item.body}
                      </Text>
                    </View>

                    <View>
                      <Text>
                        {item.when}
                      </Text>
                    </View>

                  </View>

                </TouchableOpacity>
              
              </View>
              
            );

          }}

        />

        <ComposeBar

          style={{justifySelf: 'flex-end',height: 40, width: '100%'}}
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

      </KeyboardAvoidingView>

    </SafeAreaView>

  );

};

//
ChatioChatScreen.navigationOptions = ({ navigation }) => {
  let tabBarVisible = false;
  return {
    tabBarVisible,
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate('CreateMessage')}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    )
  };
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
