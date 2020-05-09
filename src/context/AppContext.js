import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';
import apiPosts from '../api/apiPosts';

//
const blogReducer = (state, action) => {

  //
  switch (action.type) {

    //
    case 'get_blogposts':
      return action.payload;

    //
    case 'edit_blogpost':

      //
      return state.map(blogPost => {

        //
        return blogPost.id === action.payload.id
          ? action.payload
          : blogPost;

      });
    
    //
    case 'delete_blogpost':

      //
      return state.filter(blogPost => blogPost.id !== action.payload);

    default:

      return state;
  
  }

};

//
const getBlogPosts = dispatch => {

  //
  return async () => {

    //
    let path = '/v2/posts?';
    path += '&token='+'tkn_thentrlco';
    path += '&app='+'app_thentrlco';
    path += '&profile='+'per_adolphusnolan';
    //path += '&id='+`${id}`;
    //path += '&body='+`${body}`;
    //path += '&closed='+`${closed}`;
    //path += '&deleted='+`${deleted}`;
    //path += '&access='+`${access}`;

    //
    const response = await jsonServer.get(path);

    dispatch({ type: 'get_blogposts', payload: response.data.data });
  };
};

//
const addBlogPost = dispatch => {

  //
  return async (host, body, closed, deleted, access, callback) => {

    //
    let path = '/v2/posts?';
    path += '&token='+'tkn_thentrlco';
    path += '&app='+'app_thentrlco';
    path += '&profile='+'per_adolphusnolan';
    path += '&host='+'per_adolphusnolan';
    //path += '&id='+`${id}`;
    path += '&body='+`${body}`;
    path += '&closed='+`${closed}`;
    path += '&deleted='+`${deleted}`;
    path += '&access='+`${access}`;

    //
    const response = await jsonServer.post(path);

    if (callback) {
      callback();
    }
  };
};

//
const deleteBlogPost = dispatch => {

  //
  return async id => {

    //
    let path = '/v2/posts?';
    path += '&token='+'tkn_thentrlco';
    path += '&app='+'app_thentrlco';
    path += '&profile='+'per_adolphusnolan';
    path += '&host='+'per_adolphusnolan';
    path += '&id='+`${id}`;
    //path += '&body='+`${body}`;
    //path += '&closed='+`${closed}`;
    //path += '&deleted='+`${deleted}`;
    //path += '&access='+`${access}`;

    const response = await jsonServer.delete(path);

    console.log(response.data.data);

    dispatch({ type: 'delete_blogpost', payload: id });
  };
};

//
const editBlogPost = dispatch => {

  //
  return async (id,host,body,closed,deleted,access,callback) => {

    //
    let path = '/v2/posts?';
    path += '&token='+'tkn_thentrlco';
    path += '&app='+'app_thentrlco';
    path += '&profile='+'per_adolphusnolan';
    path += '&host='+'per_adolphusnolan';
    path += '&id='+`${id}`;
    path += '&body='+`${body}`;
    path += '&closed='+`${closed}`;
    path += '&deleted='+`${deleted}`;
    path += '&access='+`${access}`;

    //
    const response = await jsonServer.put(path);

    //console.log(response);
    //console.log(id,body,closed,deleted,access);

    dispatch({
      type: 'edit_blogpost',
      payload: { id, host, body, closed, deleted, access }
    });
    if (callback) {
      callback();
    }
  };
};

// Posts
const getPosts = dispatch => {

//
return async () => {

    //
    let path = '/v2/posts?';
    path += '&token='+'tkn_thentrlco';
    path += '&app='+'app_thentrlco';
    path += '&profile='+'per_adolphusnolan';
    //path += '&id='+`${id}`;
    //path += '&body='+`${body}`;
    //path += '&closed='+`${closed}`;
    //path += '&deleted='+`${deleted}`;
    //path += '&access='+`${access}`;

    //
    const response = await apiPosts.get(path);

    dispatch({ type: 'get_posts', payload: response.data.data });
};
};

// Posts
const addPost = dispatch => {

//
return async (host, body, closed, deleted, access, callback) => {

    //
    let path = '/v2/posts?';
    path += '&token='+'tkn_thentrlco';
    path += '&app='+'app_thentrlco';
    path += '&profile='+'per_adolphusnolan';
    path += '&host='+`${host}`;
    //path += '&id='+`${id}`;
    path += '&body='+`${body}`;
    path += '&closed='+`${closed}`;
    path += '&deleted='+`${deleted}`;
    path += '&access='+`${access}`;

    //
    const response = await apiPosts.post(path);

    console.log(response);

    if (callback) {
    callback();
    }
};
};

// Posts
const deletePost = dispatch => {

//
return async id => {

    //
    let path = '/v2/posts?';
    path += '&token='+'tkn_thentrlco';
    path += '&app='+'app_thentrlco';
    path += '&profile='+'per_adolphusnolan';
    path += '&host='+'per_adolphusnolan';
    path += '&id='+`${id}`;
    //path += '&body='+`${body}`;
    //path += '&closed='+`${closed}`;
    //path += '&deleted='+`${deleted}`;
    //path += '&access='+`${access}`;

    const response = await apiPosts.delete(path);

    console.log(response.data.data);

    dispatch({ type: 'delete_post', payload: id });
};
};

// Posts
const editPost = dispatch => {

//
return async (id,host,body,closed,deleted,access,callback) => {

    //
    let path = '/v2/posts?';
    path += '&token='+'tkn_thentrlco';
    path += '&app='+'app_thentrlco';
    path += '&profile='+'per_adolphusnolan';
    path += '&host='+'per_adolphusnolan';
    path += '&id='+`${id}`;
    path += '&body='+`${body}`;
    path += '&closed='+`${closed}`;
    path += '&deleted='+`${deleted}`;
    path += '&access='+`${access}`;

    //
    const response = await apiPosts.put(path);

    //console.log(response);
    //console.log(id,body,closed,deleted,access);

    dispatch({
    type: 'edit_post',
    payload: { id, host, body, closed, deleted, access }
    });
    if (callback) {
    callback();
    }
};
};

export const { Context, Provider } = createDataContext(
  blogReducer, {
    addBlogPost,
    deleteBlogPost,
    editBlogPost,
    getBlogPosts,
    addPost,
    deletePost,
    editPost,
    getPosts
  },[]
);
