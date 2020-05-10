import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const ThreadForm = ({ onSubmit, initialValues }) => {

  const [body, setBody] = useState(initialValues.body);
  const [deleted, setDeleted] = useState(initialValues.deleted);
  const [thread, setThread] = useState(initialValues.thread);
  const [profile, setProfile] = useState(initialValues.profile);

  return (
    <View>

      <Text style={styles.label}>Enter body:</Text>
      <TextInput
        style={styles.input}
        value={body}
        autoCapitalize='none'
        placeholder={'Enter the index to scroll'}
        onChangeText={text => setBody(text)}
      />

      <Text style={styles.label}>Enter thread:</Text>
      <TextInput
        style={styles.input}
        value={thread}
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

      <Text style={styles.label}>Enter deleted:</Text>
      <TextInput
        style={styles.input}
        value={deleted}
        autoCapitalize='none'
        placeholder={'Enter the index to scroll'}
        onChangeText={text => setDeleted(text)}
      />

    <Text style={styles.label}>Enter profile:</Text>
      <TextInput
        style={styles.input}
        value={profile}
        autoCapitalize='none'
        placeholder={'Enter the index to scroll'}
        onChangeText={text => setProfile(text)}
      />

      <Button body="Save Thread" onPress={() => onSubmit(body,thread,contributors,deleted,profile)} />
    </View>
  );
};

ThreadForm.defaultProps = {
  initialValues: {
    body: '',
    thread: '',
    contributors: '',
    deleted: '',
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
