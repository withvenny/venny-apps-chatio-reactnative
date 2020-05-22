import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context as MessageProvider } from 'src/context/MessageContext';
import ComposeForm from 'src/components/ComposeForm';

//
const ChatioComposeScreen = ({ navigation }) => {

  const contributors = navigation.getParam('id');

  console.log("ChatioComposeScreen/contributors: " + contributors);

  //
  const { composeMessage } = useContext(MessageProvider);

  return (
    <ComposeForm
      initialValues={{
        body: '',
        contributors: contributors,
      }}
      onSubmit={(body,contributors) => {
        composeMessage(body,contributors,() => navigation.navigate('People'));
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default ChatioComposeScreen;
