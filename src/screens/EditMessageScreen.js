import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context as MessageProvider } from 'src/context/MessageContext';
import MessageForm from 'src/components/MessageForm';

const EditMessageScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const { state, editMessage } = useContext(MessageProvider);

  const message = state.find(message => message.id === id);

  return (
    <MessageForm
      initialValues={{
        thread: message.thread,
        body: message.body,
        deleted: message.deleted,
      }}
      onSubmit={(thread,body,deleted) => {
        editMessage(
          id,
          thread,
          body,
          deleted,
          () => navigation.pop()
        );
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default EditMessageScreen;
