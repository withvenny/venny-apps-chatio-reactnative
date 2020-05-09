import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context as ThreadProvider } from '../context/ThreadContext';
import ThreadForm from '../components/ThreadForm';

const EditThreadScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const { state, editThread } = useContext(ThreadProvider);

  const thread = state.find(thread => thread.id === id);

  return (
    <ThreadForm
      initialValues={{
        title: thread.title,
        administrators: thread.administrators,
        contributors: thread.contributors,
        preview: thread.preview,
        profile: thread.profile
      }}
      onSubmit={(title,administrators,contributors,preview,profile) => {
        editThread(
          id,
          title,
          administrators,
          contributors,
          preview,
          profile,
          () => navigation.pop()
        );
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default EditThreadScreen;
