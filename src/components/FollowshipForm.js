import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const FollowshipForm = ({ onSubmit, initialValues }) => {

  const [sender, setSender] = useState(initialValues.sender);
  const [recipient, setRecipient] = useState(initialValues.recipient);
  const [status, setStatus] = useState(initialValues.status);

  return (
    <View>

      <Text style={styles.label}>Enter Sender:</Text>
      <TextInput
        style={styles.input}
        value={sender}
        autoCapitalize='none'
        placeholder={'Enter the index to scroll'}
        onChangeText={text => setSender(text)}
      />

      <Text style={styles.label}>Enter Recipient:</Text>
      <TextInput
        style={styles.input}
        value={recipient}
        autoCapitalize='none'
        placeholder={'Enter the index to scroll'}
        onChangeText={text => setRecipient(text)}
      />

    <Text style={styles.label}>Enter Status:</Text>
      <TextInput
        style={styles.input}
        value={status}
        autoCapitalize='none'
        placeholder={'Enter the index to scroll'}
        onChangeText={text => setStatus(text)}
      />

      <Button title="Save Followship" onPress={() => onSubmit(sender,recipient,status)} />
    </View>
  );
};

FollowshipForm.defaultProps = {
  initialValues: {
    sender: '',
    recipient: '',
    status: ''
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

export default FollowshipForm;
