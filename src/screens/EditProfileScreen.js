import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context as ProfileProvider } from '../context/ProfileContext';
import ProfileForm from '../components/ProfileForm';

const EditProfileScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const { state, editProfile } = useContext(ProfileProvider);

  const profile = state.find(profile => profile.id === id);

  return (
    <ProfileForm
      initialValues={{
        bio: profile.bio,
        headline: profile.headline,
        status: profile.status,
        access: profile.access
      }}
      onSubmit={(bio,headline,status,access) => {
        editProfile(
          id,
          bio,
          headline,
          status,
          access,
          () => navigation.pop()
        );
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default EditProfileScreen;
