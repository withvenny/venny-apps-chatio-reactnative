import createDataContext from 'src/context/createDataContext';
import {
  Alert, AsyncStorage,
} from 'react-native';
import api from 'src/api';

//
const messageReducer = (state, action) => {

  //
  switch (action.type) {

    //
    case 'get_messages': return action.payload;
    case 'edit_message': return state.map(message => { return message.id === action.payload.id ? action.payload : message; });
    case 'delete_message': return state.filter(message => message.id !== action.payload);

    default:

      return state;

  }

};

// Message ADD
const addMessage = dispatch => {
  
  //
  return async (thread,body,deleted,callback) => {

    console.log(await AsyncStorage.getItem('Profile: ' + 'profile'));
    var profile = await AsyncStorage.getItem('profile');
    //Alert.alert("New token set for addMessage: " + profile);
    
      //
      let path = '/messages?';
      path += 'token=' + 'tkn_thentrlco';
      path += '&app=' + 'app_thentrlco';
      path += '&profile=' + profile;
      path += '&thread=' + `${thread}`;
      //path += '&id=' + `${id}`;
      path += '&body=' + `${body}`;
      //path += '&images=' + JSON.stringify(images);
      path += '&deleted=' + `${deleted}`;

      //
      console.log("path: " + path);
  
      //
      const response = await api.post(path);
  
      console.log(response);
  
      if (callback) {
      callback();
      }
  };
};

// Message GET
const getMessages = dispatch => {

  //
  return async (thread) => {

    console.log(await AsyncStorage.getItem('Profile: ' + 'profile'));
    var profile = await AsyncStorage.getItem('profile');
    //Alert.alert("New token set for getMessages: " + profile);
  
      //
      let path = '/messages?';
      path += 'token=' + 'tok_thentrlco';
      path += '&app=' + 'app_thentrlco';
      //path += '&profile=' + profile;
      path += '&thread='+`${thread}`;
      //path += '&id='+`${id}`;
      //path += '&body='+`${body}`;
      //path += '&images='+ JSON.stringify(images);
      //path += '&deleted='+`${deleted}`;
      
      //
      console.log("path: " + path);
      
      //
      const response = await api.get(path);

      console.log(response.data.data);
  
      dispatch({ type: 'get_messages', payload: response.data.data });

   };

};
  
// Message UPDATE
const editMessage = dispatch => {
  
  //
  return async (id,body,deleted,callback) => {

    console.log(await AsyncStorage.getItem('Profile: ' + 'profile'));
    var profile = await AsyncStorage.getItem('profile');
    //Alert.alert("New token set for editMessage: " + profile);

      //
      let path = '/messages?';
      path += 'token=' + 'tkn_thentrlco';
      path += '&app=' + 'app_thentrlco';
      path += '&profile=' + profile;
      //path += '&thread=' + `${thread}`;
      path += '&id=' + `${id}`;
      path += '&body=' + `${body}`;
      //path += '&images='+ JSON.stringify(images);
      path += '&deleted=' + `${deleted}`;

      //
      console.log("path: " + path);
  
      //
      const response = await api.put(path);
  
      console.log(response);
  
      if (callback) {
        callback();
      }

  };
};

// Message DELETE
const deleteMessage = dispatch => {
  
  //
  return async id => {

    console.log(await AsyncStorage.getItem('Profile: ' + 'profile'));
    var profile = await AsyncStorage.getItem('profile');
    //Alert.alert("New token set for deleteMessage: " + profile);
  
      //
      let path = '/messages?';
      path += '&token=' + 'tkn_thentrlco';
      path += '&app=' + 'app_thentrlco';
      path += '&profile=' + profile;
      //path += '&thread=' + `${thread}`;
      path += '&id=' + `${id}`;
      //path += '&body=' + `${body}`;
      //path += '&images=' + JSON.stringify(images);
      //path += '&deleted=' + `${deleted}`;

      //
      console.log("path: " + path);
  
      const response = await api.delete(path);
  
      //console.log(response.data.data);
  
      dispatch({ type: 'delete_message', payload: id });
  };
};

// Message COMPOSE
const composeMessage = dispatch => {
  
  //
  return async (body,contributors,thread,callback) => {

    console.log(await AsyncStorage.getItem('Profile: ' + 'profile'));
    var profile = await AsyncStorage.getItem('profile');
    //Alert.alert("MessageContext.token.composeMessage: " + profile);

    //
    var participants = {"blocked":[]};

    //
    participants.administrators = [`${profile}`];
    //participants.administrators.push(administrators);

    //
    participants.contributors = [`${profile}`];
    participants.contributors.push(contributors);

    //Result:
    console.log("MessageContext.composeMessage.participants." + JSON.stringify(participants));
    console.log("MessageContext.composeMessage.participants.contributors." + contributors);
    
      //
      let path = '/compose?';
      path += 'token=' + 'tkn_thentrlco';
      path += '&app=' + 'app_thentrlco';
      path += '&profile=' + profile;
      path += '&thread=' + `${thread}`;
      //path += '&id=' + `${id}`;
      path += '&body=' + `${body}`;
      path += '&participants='+ JSON.stringify(participants);
      //path += '&images=' + JSON.stringify(images);
      //path += '&deleted=' + `${deleted}`;

      //
      console.log("path: " + path);
  
      //
      const response = await api.post(path);
  
      console.log(response);
  
      if (callback) {
      callback();
      }
  };
};

//
export const { Context, Provider } = createDataContext(
  messageReducer, {
    composeMessage,
    addMessage,
    deleteMessage,
    editMessage,
    getMessages,
  },[]
);
