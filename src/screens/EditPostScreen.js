import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context as PostProvider } from '../context/PostContext';
import PostForm from '../components/PostForm';

const EditPostScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const { state, editPost } = useContext(PostProvider);

  const post = state.find(post => post.id === id);

  return (
    <PostForm
      initialValues={{
        host: post.host,
        body: post.body,
        closed: post.closed,
        deleted: post.deleted,
        access: post.access
      }}
      onSubmit={(host,body,closed,deleted,access) => {
        editPost(
          id,
          host,
          body,
          closed,
          deleted,
          access,
          () => navigation.pop()
        );
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default EditPostScreen;
