import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from 'src/context/ThreadContext';
import ThreadForm from 'src/components/ThreadForm';

//
const CreateThreadScreen = ({ navigation }) => {

  //
  const { addThread } = useContext(Context);

  return (
    <ThreadForm
      onSubmit={(title,administrators,contributors,preview,profile) => {
        addThread(title,administrators,contributors,preview,profile, () => navigation.navigate('IndexThread'));
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default CreateThreadScreen;
