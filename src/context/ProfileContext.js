//
import { AsyncStorage,Alert } from 'react-native';

import createDataContext from 'src/context/createDataContext';
import api from 'src/api';

//
const profileReducer = (state, action) => {

  //
  switch (action.type) {

    //
    case 'get_profiles': return action.payload;
    case 'edit_profile': return state.map(profile => { return profile.id === action.payload.id ? action.payload : profile; });
    case 'delete_profile': return state.filter(profile => profile.id !== action.payload);

    default:

      return state;
  
  }

};

// Profile GET
const getProfiles = dispatch => {

  //
  return async (id='',bio='',headline='',access='',status='') => {

    var profile = await AsyncStorage.getItem('profile');

    //
    let path = '/profiles';
    path += '?token=' + 'tkn_thentrlco';
    path += '&app=' + 'app_thentrlco';
    path += '&profile=' + profile;

    //
    if(!id == ''){path += '&id='+`${id}`;}
    if(!bio == ''){path += '&bio='+`${bio}`;}
    if(!headline == ''){path += '&headline='+`${headline}`;}
    if(!access == ''){path += '&access='+`${access}`;}
    if(!status == ''){path += '&status='+`${status}`;}

    //
    const response = await api.get(path);

    //console.log(path);
    //console.log(response.data.data);

    dispatch({ type: 'get_profiles', payload: response.data.data });

  };

};

// Profile GET
const getProfile = dispatch => {

  //
  return async (id='',bio='',headline='',access='',status='') => {

    var profile = await AsyncStorage.getItem('profile');

    //
    let path = '/profiles';
    path += '?token=' + 'tkn_thentrlco';
    path += '&app=' + 'app_thentrlco';
    path += '&profile=' + profile;

    //
    if(!id == ''){path += '&id='+`${id}`;}
    if(!bio == ''){path += '&bio='+`${bio}`;}
    if(!headline == ''){path += '&headline='+`${headline}`;}
    if(!access == ''){path += '&access='+`${access}`;}
    if(!status == ''){path += '&status='+`${status}`;}

    //
    const response = await api.get(path);

    //console.log(path);
    //console.log(response.data.data);

    dispatch({ type: 'get_profiles', payload: response.data.data });

  };

};
  
// Profile ADD
const addProfile = dispatch => {
  
  //
  return async (bio,headline,status,access,callback) => {
  
      //
      let path = '/profiles?';
      path += '&token='+'tkn_thentrlco';
      path += '&app='+'app_thentrlco';
      path += '&profile='+'prf_adolphusnolan';
      //path += '&id='+`${id}`;
      path += '&bio='+`${bio}`;
      path += '&headline='+`${headline}`;
      path += '&access='+`${access}`;
      path += '&status='+`${status}`;
  
      //
      const response = await api.post(path);
  
      //console.log(response);
  
      if (callback) {
      callback();
      }
  };
};
  
// Profile DELETE
const deleteProfile = dispatch => {
  
  //
  return async id => {
  
      //
      let path = '/profiles?';
      path += '&token='+'tkn_thentrlco';
      path += '&app='+'app_thentrlco';
      path += '&profile='+'prf_adolphusnolan';
      path += '&id='+`${id}`;
      //path += '&bio='+`${bio}`;
      //path += '&headline='+`${headline}`;
      //path += '&access='+`${access}`;
      //path += '&status='+`${status}`;
  
      const response = await api.delete(path);
  
      //console.log(response.data.data);
  
      dispatch({ type: 'delete_profile', payload: id });
  };
};

// Profile EDIT
const editProfile = dispatch => {
  
  //
  return async (id,bio,headline,status,access,callback) => {
  
    //
    let path = '/profiles?';
    path += '&token='+'tkn_thentrlco';
    path += '&app='+'app_thentrlco';
    path += '&profile='+'prf_adolphusnolan';
    path += '&id='+`${id}`;
    path += '&bio='+`${bio}`;
    path += '&headline='+`${headline}`;
    path += '&access='+`${access}`;
    path += '&status='+`${status}`;

    //
    const response = await api.put(path);

    //console.log(response);

    //
    dispatch({
      type: 'edit_profile',
      payload: { id, bio, headline, status, access }
    });
    
    //
    if (callback) {
      callback();
    }

  };

};

//
export const { Context, Provider } = createDataContext(
  profileReducer, {
    addProfile,
    deleteProfile,
    editProfile,
    getProfiles,
    getProfile,
  },[]
);
