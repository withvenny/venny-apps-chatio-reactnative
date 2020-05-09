import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const ThreadForm = ({ onSubmit, initialValues }) => {

  const [title, setTitle] = useState(initialValues.title);
  const [administrators, setAdministrators] = useState(initialValues.administrators);
  const [contributors, setContributors] = useState(initialValues.contributors);
  const [preview, setPreview] = useState(initialValues.preview);
  const [profile, setProfile] = useState(initialValues.profile);

  return (
    <View>

      <Text style={styles.label}>Enter title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        autoCapitalize='none'
        placeholder={'Enter the index to scroll'}
        onChangeText={text => setTitle(text)}
      />

      <Text style={styles.label}>Enter administrators:</Text>
      <TextInput
        style={styles.input}
        value={administrators}
        autoCapitalize='none'
        placeholder={'Enter the index to scroll'}
        onChangeText={text => setAdministrators(text)}
      />

  <Text style={styles.label}>Enter contributors:</Text>
      <TextInput
        style={styles.input}
        value={contributors}
        autoCapitalize='none'
        placeholder={'Enter the index to scroll'}
        onChangeText={text => setContributors(text)}
      />

      <Text style={styles.label}>Enter preview:</Text>
      <TextInput
        style={styles.input}
        value={preview}
        autoCapitalize='none'
        placeholder={'Enter the index to scroll'}
        onChangeText={text => setPreview(text)}
      />

    <Text style={styles.label}>Enter profile:</Text>
      <TextInput
        style={styles.input}
        value={profile}
        autoCapitalize='none'
        placeholder={'Enter the index to scroll'}
        onChangeText={text => setProfile(text)}
      />

      <Button title="Save Thread" onPress={() => onSubmit(title,administrators,contributors,preview,profile)} />
    </View>
  );
};

ThreadForm.defaultProps = {
  initialValues: {
    title: '',
    administrators: '',
    contributors: '',
    preview: '',
    profile: ''
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

export default ThreadForm;
