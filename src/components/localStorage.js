import React from 'react';
import { AsyncStorage } from 'react-native';

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
    //console.log("//localStorage/profileGet/profile",profile);

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
  
  };

};

//
export {
  storageSet,
  profileGet,
  getProfile
};