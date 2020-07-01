import React from 'react';
import { AsyncStorage } from 'react-native';

/*
const storageSet = async(key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch(error) {
      console.log(error);
    }
}
*/

const profileGet = async () => {
  try {
       const result = await AsyncStorage.getItem('profile');
       console.log("//localStorage/result",result);
       return async (result);
    } catch(error) {
      console.log(error);
    }
}

/*
AsyncStorage.getItem('key')
.then((value) => {
  const data = JSON.parse(value);
  console.log('name is ', data.name);
});
*/

export { /*storageSet,*/ profileGet };