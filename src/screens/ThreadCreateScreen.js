import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/ThreadContext';
import ThreadForm from '../components/ThreadForm';

//
const ThreadCreateScreen = ({ navigation }) => {

  //
  const { addThread } = useContext(Context);

  return (
    <ThreadForm
      onSubmit={(title,participants,preview,profile) => {
        addThread(title,participants,preview,profile, () => navigation.navigate('IndexThread'));
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default ThreadCreateScreen;
