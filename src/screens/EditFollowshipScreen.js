import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context as FollowshipProvider } from '../context/FollowshipContext';
import FollowshipForm from '../components/FollowshipForm';

const EditFollowshipScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const { state, editFollowship } = useContext(FollowshipProvider);

  const followship = state.find(followship => followship.id === id);

  return (
    <FollowshipForm
      initialValues={{
        sender: followship.sender,
        recipient: followship.recipient,
        status: followship.status
      }}
      onSubmit={(sender,recipient,status) => {
        editFollowship(
          id,
          sender,
          recipient,
          status,
          () => navigation.pop()
        );
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default EditFollowshipScreen;
