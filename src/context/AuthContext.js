//
import { AsyncStorage,Alert } from 'react-native';

//
import createDataContext from 'src/context/createDataContext';
import api from 'src/api';
import { navigate } from 'src/navigationRef';

//
const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'signin':
      return { errorMessage: '', token: action.payload };
    case 'clear_error_message':
      return { ...state, errorMessage: '' };
    case 'signout':
      return { token: null, errorMessage: '' };
    default:
      return state;
  }
};

//
const tryLocalSignin = dispatch => async () => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    dispatch({ type: 'signin', payload: token });
    navigate('experienceFlow');
  } else {
    navigate('Welcome');
  }
};

//
const clearErrorMessage = dispatch => () => {
  dispatch({ type: 'clear_error_message' });
};

//
const signup = dispatch => async ({ email, password, name }) => {
  
    //
    let path = '/signup';
    path += '?token='+'tkn_thentrlco';
    path += '&app='+'app_thentrlco';
    path += '&profile='+'app_thentrlco';
    path += '&email='+`${email}`;
    path += '&authorize='+`${password}`;
    path += '&name_first='+`${name}`;
    
    //
    try {
      
      //
      const response = await api.post(path);
    
      dispatch({ type: 'signin', payload: response.data.data });

      navigate('experienceFlow');

    } catch (err) {
      
      dispatch({
      type: 'add_error',
      payload: 'Something went wrong with sign up'

    });

  }

};

//
const signin = dispatch => async ({ email, password }) => {

  //
  let path = '/signin';
  path += '?token='+'tkn_thentrlco';
  path += '&app='+'app_thentrlco';
  path += '&email='+`${email}`;
  path += '&authorize='+`${password}`;

  console.log(path);

  try {
    const response = await api.post(path);

    await AsyncStorage.setItem('token', response.data.data.profile[0].id);
    await AsyncStorage.setItem('profile', response.data.data.profile[0].id);

    console.log(await AsyncStorage.getItem('Token: ' + 'token'));
    console.log(await AsyncStorage.getItem('Profile: ' + 'profile'));

    var profile = await AsyncStorage.getItem('profile');

    Alert.alert("New token set: " + profile);

    dispatch({ type: 'signin', payload: response.data.data.profile[0].id });
    navigate('experienceFlow');
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with sign in'
    });
  }
};

//
const signout = dispatch => async () => {
  await AsyncStorage.removeItem('token');
  dispatch({ type: 'signout' });
  //navigate('loginFlow');
  navigate('ResolveAuth');
};

//
export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup, clearErrorMessage, tryLocalSignin },
  { token: null, errorMessage: '' }
);
