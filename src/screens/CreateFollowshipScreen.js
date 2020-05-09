import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/FollowshipContext';
import FollowshipForm from '../components/FollowshipForm';

//
const CreateFollowshipScreen = ({ navigation }) => {

  //
  const { addFollowship } = useContext(Context);

  return (
    <FollowshipForm
      onSubmit={(sender,recipient,status) => {
        addFollowship(sender,recipient,status, () => navigation.navigate('IndexFollowship'));
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default CreateFollowshipScreen;
