import React from 'react';
//import { AsyncStorage } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

//
const storageSet = async(key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch(error) {
      console.log(error);
    }
}

//
const profileGet = async () => {

  try {

    const profile = await AsyncStorage.getItem('profile');
    console.log("//localStorage/profileGet/profile",profile);

    //
    return () => {

      profile;

    };

  } catch(error) {

    console.log(error);
  
  }

};

//
const getProfile = () => {

  //
  return async () => {

    //console.log(await AsyncStorage.getItem('Profile: ' + 'profile'));
    const profile = await AsyncStorage.getItem('profile');
    console.log(profile);
    //Alert.alert("New token set for getThreads: " + profile); 
    
    return profile;

  };

};

const getData = async() => {
  try {
    let value = await AsyncStorage.getItem('profile')
    if (value!==null){
      console.log(value)
      return session
    }
  } catch(e) {
    console.error('no data available');
  }
};

export {
  getData
};