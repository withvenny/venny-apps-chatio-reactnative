import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const ProfileForm = ({ onSubmit, initialValues }) => {

  const [bio, setBio] = useState(initialValues.profiles.bio);
  const [headline, setHeadline] = useState(initialValues.profiles.headline);
  const [status, setStatus] = useState(initialValues.profiles.status);
  const [access, setAccess] = useState(initialValues.profiles.access);

  return (
    <View>

      <Text style={styles.label}>Enter Bio:</Text>
      <TextInput
        style={styles.input}
        value={profiles.bio}
        placeholder={'Enter the index to scroll'}
        onChangeText={text => setBio(text)}
      />

      <Text style={styles.label}>Enter Headline:</Text>
      <TextInput
        style={styles.input}
        value={profiles.headline}
        placeholder={'Enter the index to scroll'}
        onChangeText={text => setHeadline(text)}
      />

      <Text style={styles.label}>Enter Status:</Text>
      <TextInput
        style={styles.input}
        value={profiles.status}
        placeholder={'Enter the index to scroll'}
        onChangeText={text => setStatus(text)}
      />

        <Text style={styles.label}>Enter Access:</Text>
      <TextInput
        style={styles.input}
        value={profiles.access}
        placeholder={'Enter the index to scroll'}
        onChangeText={text => setAccess(text)}
      />

      <Button title="Save Blog profile" onPress={() => onSubmit(bio,headline,status,access)} />
    </View>
  );
};

ProfileForm.defaultProps = {
  initialValues: {
    profiles: {
      bio: '',
      headline: '',
      status: '',
      access: ''
    }
  }
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 5
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5
  }
});

export default ProfileForm;
