import createDataContext from './createDataContext';
import api from '../api';

//
const followshipReducer = (state, action) => {

  //
  switch (action.type) {

    //
    case 'get_followships': return action.payload;
    case 'edit_followship': return state.map(followship => { return followship.id === action.payload.id ? action.payload : followship; });
    case 'delete_followship': return state.filter(followship => followship.id !== action.payload);

    default:

      return state;
  
  }

};

// Followship GET
const getFollowships = dispatch => {

  //
  return async () => {
  
      //
      let path = '/followships?';
      path += '&token='+'tkn_thentrlco';
      path += '&app='+'app_thentrlco';
      path += '&profile='+'prf_adolphusnolan';
      //path += '&id='+`${id}`;
      //path += '&sender='+`${sender}`;
      //path += '&recipient='+`${recipient}`;
      //path += '&status='+`${status}`;
  
      //
      const response = await api.get(path);

      console.log(response.data.data);
  
      dispatch({ type: 'get_followships', payload: response.data.data });
  };
};
  
// Followship ADD
const addFollowship = dispatch => {
  
  //
  return async (sender,recipient,status,callback) => {
  
      //
      let path = '/followships?';
      path += '&token='+'tkn_thentrlco';
      path += '&app='+'app_thentrlco';
      path += '&profile='+'prf_adolphusnolan';
      //path += '&id='+`${id}`;
      path += '&sender='+`${sender}`;
      path += '&recipient='+`${recipient}`;
      path += '&status='+`${status}`;
  
      //
      const response = await api.post(path);
  
      //console.log(response);
  
      if (callback) {
      callback();
      }
  };
};
  
// Followship DELETE
const deleteFollowship = dispatch => {
  
  //
  return async id => {
  
      //
      let path = '/followships?';
      path += '&token='+'tkn_thentrlco';
      path += '&app='+'app_thentrlco';
      path += '&profile='+'prf_adolphusnolan';
      path += '&id='+`${id}`;
      //path += '&sender='+`${sender}`;
      //path += '&recipient='+`${recipient}`;
      //path += '&status='+`${status}`;
  
      const response = await api.delete(path);
  
      //console.log(response.data.data);
  
      dispatch({ type: 'delete_followship', payload: id });
  };
};
  
// Followship EDIT
const editFollowship = dispatch => {
  
  //
  return async (id,sender,recipient,status,callback) => {
  
      //
      let path = '/followships?';
      path += '&token='+'tkn_thentrlco';
      path += '&app='+'app_thentrlco';
      path += '&profile='+'prf_adolphusnolan';
      path += '&id='+`${id}`;
      path += '&sender='+`${sender}`;
      path += '&recipient='+`${recipient}`;
      path += '&status='+`${status}`;
  
      //
      const response = await api.put(path);
  
      //console.log(response);
  
      dispatch({
      type: 'edit_followship',
      payload: { id, sender, recipient, status }
      });
      if (callback) {
      callback();
      }
  };
  };

//
export const { Context, Provider } = createDataContext(
  followshipReducer, {
    addFollowship,
    deleteFollowship,
    editFollowship,
    getFollowships,
  },[]
);
