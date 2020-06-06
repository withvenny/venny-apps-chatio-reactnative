import createDataContext from 'src/context/createDataContext';
import {
  Alert, AsyncStorage,
} from 'react-native';
import api from 'src/api';

//
const threadReducer = (state, action) => {

  //
  switch (action.type) {

    //
    case 'get_threads': return action.payload;
    case 'edit_thread': return state.map(thread => { return thread.id === action.payload.id ? action.payload : thread; });
    case 'delete_thread': return state.filter(thread => thread.id !== action.payload);

    default:

      return state;
  
  }

};

// Thread GET
const getThreads = dispatch => {

  //
  return async () => {

    console.log(await AsyncStorage.getItem('Profile: ' + 'profile'));
    var profile = await AsyncStorage.getItem('profile');
    //Alert.alert("New token set for getThreads: " + profile);  
  
      //
      let path = '/threads?';
      path += '&token='+'tok_thentrlco';
      path += '&app='+'app_thentrlco';
      path += '&profile='+profile;
      //path += '&id='+`${id}`;
      //path += '&title='+`${title}`;
      //path += '&participants='+`${participants}`;
      //path += '&preview='+`${preview}`;
  
      //
      console.log("path: "+path);
      
      //
      const response = await api.get(path);

      console.log(response.data.data);
  
      dispatch({ type: 'get_threads', payload: response.data.data });
  };
};
  
// Thread ADD
const addThread = dispatch => {
  
  //
  return async (title,administrators,contributors,preview,profile,callback) => {

    console.log(await AsyncStorage.getItem('Profile: ' + 'profile'));
    var profile = await AsyncStorage.getItem('profile');
    Alert.alert("New token set for addThread: " + profile);

    //
    var participants = {"blocked":[]};

    //
    participants.administrators = [];
    participants.administrators.push(administrators);
    
    //
    participants.contributors = [`${profile}`];
    participants.contributors.push(contributors);

  //Result:
  console.log(participants);

      //
      let path = '/threads?';
      path += 'token='+'tkn_thentrlco';
      path += '&app='+'app_thentrlco';
      path += '&profile='+profile;
      //path += '&id='+`${id}`;
      path += '&title='+`${title}`;
      path += '&participants='+ JSON.stringify(participants);
      //path += '&participants='+`${participants}`;
      path += '&preview='+`${preview}`;

      //
      console.log("path: "+path);
  
      //
      const response = await api.post(path);
  
      //console.log(response);
  
      if (callback) {
      callback();
      }
  };
};
  
// Thread DELETE
const deleteThread = dispatch => {
  
  //
  return async id => {

    console.log(await AsyncStorage.getItem('Profile: ' + 'profile'));
    var profile = await AsyncStorage.getItem('profile');
    Alert.alert("New token set for deleteThread: " + profile);
  
      //
      let path = '/threads?';
      path += '&token='+'tkn_thentrlco';
      path += '&app='+'app_thentrlco';
      path += '&profile='+profile;
      path += '&id='+`${id}`;
      //path += '&title='+`${title}`;
      //path += '&participants='+`${participants}`;
      //path += '&preview='+`${preview}`;

      //
      console.log("path: "+path);
  
      const response = await api.delete(path);
  
      //console.log(response.data.data);
  
      dispatch({ type: 'delete_thread', payload: id });
  };
};
  
// Thread UPDATE
const editThread = dispatch => {
  
  //
  return async (id,title,administrators,contributors,preview,profile,callback) => {

    console.log(await AsyncStorage.getItem('Profile: ' + 'profile'));
    var profile = await AsyncStorage.getItem('profile');
    Alert.alert("New token set for editThread: " + profile);

    //
    var participants = {"blocked":[]};

    //
    participants.administrators = [];
    participants.administrators.push(administrators);
    
    //
    participants.contributors = [`${profile}`];
    participants.contributors.push(contributors);

  //Result:
  console.log(participants);

      //
      let path = '/threads?';
      path += 'token='+'tkn_thentrlco';
      path += '&app='+'app_thentrlco';
      path += '&profile='+profile;
      path += '&id='+`${id}`;
      path += '&title='+`${title}`;
      path += '&participants='+ JSON.stringify(participants);
      //path += '&participants='+`${participants}`;
      path += '&preview='+`${preview}`;

      //
      console.log("path: "+path);
  
      //
      const response = await api.put(path);
  
      //console.log(response);
  
      if (callback) {
      callback();
      }
  };
};

//
export const { Context, Provider } = createDataContext(
  threadReducer, {
    addThread,
    deleteThread,
    editThread,
    getThreads,
  },[]
);
