import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const PostForm = ({ onSubmit, initialValues }) => {

  const [host, setHost] = useState(initialValues.posts.host);
  const [body, setBody] = useState(initialValues.posts.body);
  const [closed, setClosed] = useState(initialValues.posts.closed);
  const [deleted, setDeleted] = useState(initialValues.posts.deleted);
  const [access, setAccess] = useState(initialValues.posts.access);

  return (
    <View>

      <Text style={styles.label}>Enter Body:</Text>
      <TextInput
        style={styles.input}
        value={posts.body}
        placeholder={'Enter the index to scroll'}
        onChangeText={text => setBody(text)}
      />

      <Text style={styles.label}>Enter Host:</Text>
      <TextInput
        style={styles.input}
        value={posts.host}
        placeholder={'Enter the index to scroll'}
        onChangeText={text => setHost(text)}
      />

      <Text style={styles.label}>Enter Closed:</Text>
      <TextInput
        numericvalue
        keyboardType={'numeric'}
        style={styles.input}
        value={String(posts.closed)}
        placeholder={'Enter a number between 0-9'}
        onChangeText={text => setClosed(text)}
      />

      <Text style={styles.label}>Enter Deleted:</Text>
      <TextInput
        numericvalue
        keyboardType={'numeric'}
        style={styles.input}
        value={String(posts.deleted)}
        placeholder={'Enter a number between 0-9'}
        onChangeText={text => setDeleted(text)}
      />

      <Text style={styles.label}>Enter Access:</Text>
      <TextInput
        numericvalue
        keyboardType={'numeric'}
        style={styles.input}
        value={String(posts.access)}
        placeholder={'Enter a number between 0-9'}
        onChangeText={text => setAccess(text)}
      />

      <Button title="Save Blog Post" onPress={() => onSubmit(host,body,closed,deleted,access)} />
    </View>
  );
};

PostForm.defaultProps = {
  initialValues: {
    posts: {
      host: '',
      body: '',
      closed: '',
      deleted: '',
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

export default PostForm;
