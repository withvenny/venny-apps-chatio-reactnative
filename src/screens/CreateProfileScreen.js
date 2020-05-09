import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context as ProfileProvider} from '../context/ProfileContext';
import ProfileForm from '../components/ProfileForm';

//
const CreateProfileScreen = ({ navigation }) => {

  //
  const { addProfile } = useContext(ProfileProvider);

  return (
    <ProfileForm
      onSubmit={(bio,headline,access,status) => {
        addProfile(bio,headline,access,status, () => navigation.navigate('IndexProfile'));
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default CreateProfileScreen;
