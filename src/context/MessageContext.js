import createDataContext from 'src/context/createDataContext';
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
  
      //
      let path = '/threads?';
      path += '&token='+'tok_thentrlco';
      path += '&app='+'app_thentrlco';
      path += '&profile='+'prf_adolphusnolan';
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
  return async (title,administrators,contributors,preview,callback) => {

    var administrators = { 
      administrators: [
        'prf_adolphusnolan',
        'prf_dominickclayton',
        'prf_anthonybuchanan',
      ]
    }

  var contributors = {
    contributors: [
      'prf_adolphusnolan',
      'prf_dominickclayton',
      'prf_anthonybuchanan',
      'prf_crystalarmstrong',
      'prf_kaywht',
      'prf_ghostboyslim',
    ]
  }
  
  participants = Object.assign(contributors, administrators);
  
  //Result:
  console.log(participants);

      //
      let path = '/threads?';
      path += '&token='+'tkn_thentrlco';
      path += '&app='+'app_thentrlco';
      path += '&profile='+'prf_adolphusnolan';
      //path += '&id='+`${id}`;
      path += '&title='+`${title}`;
      path += '&participants='+ JSON.stringify(participants);
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
  
      //
      let path = '/threads?';
      path += '&token='+'tkn_thentrlco';
      path += '&app='+'app_thentrlco';
      path += '&profile='+'prf_adolphusnolan';
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
  
// Thread EDIT
const editThread = dispatch => {
  
  //
  return async (id,title,administrators,contributors,profile,preview,callback) => {
  
      //
      let path = '/threads?';
      path += '&token='+'tkn_thentrlco';
      path += '&app='+'app_thentrlco';
      path += '&profile='+'prf_adolphusnolan';
      path += '&id='+`${id}`;
      path += '&title='+`${title}`;
      path += '&participants='+`${participants}`;
      path += '&preview='+`${preview}`;

      //
      console.log("path: "+path);
  
      //
      const response = await api.put(path);
  
      //console.log(response);
  
      dispatch({
      type: 'edit_thread',
      payload: { id, title, administrators, contributors, profile, preview }
      });
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
