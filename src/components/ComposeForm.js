import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const ComposeForm = ({ onSubmit, initialValues }) => {

    const [body, setBody] = useState(initialValues.body)

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

      <Button title="Save Message" onPress={() => onSubmit(body,initialValues.contributors)} />

    </View>
  );
};

ComposeForm.defaultProps = {
  initialValues: {
    body: '',
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

export default ComposeForm;
