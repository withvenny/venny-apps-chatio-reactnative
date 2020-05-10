import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from 'src/context/MessageContext';
import MessageForm from 'src/components/MessageForm';

//
const CreateMessageScreen = ({ navigation }) => {

  //
  const { addMessage } = useContext(Context);

  return (
    <MessageForm
      onSubmit={(thread,body,deleted) => {
        addMessage(thread,body,deleted,() => navigation.navigate('IndexMessage'));
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default CreateMessageScreen;
