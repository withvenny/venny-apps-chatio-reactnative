import React, { useState } from 'react';
import {
  Button,
  KeyboardAvoidingView,
  NativeModules,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

const { StatusBarManager } = NativeModules;

//
let statusBarHeight = 0;

//
if (Platform.OS === 'ios') {

  //
  StatusBarManager.getHeight((statusBarFrameData) => {

    statusBarHeight = statusBarFrameData.height;

  });

}

// Could be nav bar height?
// Magic number but is necessary to work properly
//const IOS_OFFSET = 44;
const IOS_OFFSET = 80;
// iOS offset height...
const IOS_OFFSET = 44;

//
const getVerticalOffset = () => Platform.select({

  //
  ios: statusBarHeight + IOS_OFFSET,
  android: 0

});

// ADD MORE NAVIGATION VALUES 
const ComposeBar = ({ onSubmit, thread, contributors, initialValues }) => {

    const [body, setBody] = useState(initialValues.body);

    console.log("ComposeBar/thread/"+thread);
    console.log("ComposeBar/contributors/"+JSON.stringify(contributors));

    return (
      <KeyboardAvoidingView
        style={{position:'absolute',bottom:0,width:'100%',alignItems:'center',backgroundColor:'grey'}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={getVerticalOffset()}
      >
                <View>
                
                <TextInput
                  value={body}
                  autoCorrect={true}
                  autoCapitalize='none'
                  placeholder={'Enter the index to scroll'}
                  onChangeText={text => setBody(text)}
                />
                </View>
        
              <View>
                <Button title="Send" onPress={() => onSubmit(body,contributors,thread)} />
              </View>

        
              </KeyboardAvoidingView>
    );
  //
  const [body, setBody] = useState(initialValues.body);

  //
  console.log("ComposeBar/thread/"+thread);
  console.log("ComposeBar/contributors/"+contributors);

  //
  return (

    <KeyboardAvoidingView
      style={{position:'absolute',bottom:0,width:'100%',alignItems:'center',backgroundColor:'grey',borderWidth:2,borderColor:'black',height:46}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={getVerticalOffset()}
    >
      <View style={{position:'absolute',left:0,width:'80%'}}>

        <TextInput
          value={body}
          autoCorrect={true}
          autoCapitalize='none'
          placeholder={'Enter the index to scroll'}
          onChangeText={text => setBody(text)}
        />

      </View>

      <View style={{position:'absolute',right:0,height:50,width:'20%'}}>

        <Button title="Send" onPress={() => onSubmit(body,contributors,thread)} />

      </View>


    </KeyboardAvoidingView>

  );

};

//
ComposeBar.defaultProps = {
  initialValues: {
    body: '',
  }
};

//
const styles = StyleSheet.create({

  background: {
    //borderWidth: 1,
    marginTop: 10,
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
  },

  inputStyle: {
    //borderWidth: 1,
    //borderColor: 'black',
    flex: 1,
    fontSize: 18,
  },

  iconStyle: {
    //borderWidth: 1,
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15
  },

  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    height:40,
  },

  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5
  },

});

//
export default ComposeBar;
