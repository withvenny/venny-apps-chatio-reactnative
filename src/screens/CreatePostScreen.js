import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import PostForm from '../components/PostForm';

const CreatePostScreen = ({ navigation }) => {
  const { addPost } = useContext(Context);

  return (
    <PostForm
      onSubmit={(host, body, closed, deleted, access) => {
        addPost(host, body, closed, deleted, access, () => navigation.navigate('IndexPost'));
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default CreatePostScreen;
