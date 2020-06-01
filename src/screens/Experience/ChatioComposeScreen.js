import React, { useContext } from 'react';
import { Context as MessageProvider } from 'src/context/MessageContext';
import ComposeBar from 'src/components/ComposeBar';

//
const ChatioComposeScreen = ({ navigation }) => {

  const contributors = navigation.getParam('id');

  console.log("ChatioComposeScreen/contributors: " + contributors);

  //
  const { composeMessage } = useContext(MessageProvider);

  return (
    <ComposeBar
      initialValues={{
        body: '',
        contributors: contributors,
        contributors: thread,
      }}
      onSubmit={(body,contributors) => {
        composeMessage(body,contributors,() => navigation.navigate('Chat'));
      }}
    />
  );
};

export default ChatioComposeScreen;
