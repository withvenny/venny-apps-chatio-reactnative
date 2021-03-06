import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const MessageForm = ({ onSubmit, initialValues }) => {

    const [body, setBody] = useState(initialValues.body);
    const [deleted, setDeleted] = useState(initialValues.deleted);

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

        <Text style={styles.label}>Enter deleted:</Text>
        <TextInput
          numericvalue
          keyboardType={'numeric'}
          style={styles.input}
          value={deleted}
          autoCapitalize='none'
          placeholder={'Enter the index to scroll'}
          onChangeText={text => setDeleted(text)}
        />

      <Button title="Save Message" onPress={() => onSubmit(body,deleted)} />

    </View>
  );
};

MessageForm.defaultProps = {
  initialValues: {
    body: '',
    deleted: '',
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

export default MessageForm;
