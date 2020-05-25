//
import React, { useContext } from 'react';
import { View } from 'react-native';

//
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from 'src/context/AuthContext';
import SignInForm from 'src/components/SignInForm';
import styles from "src/values/styles";

//
const SignInScreen = ({ navigation }) => {
  
  //
  const { state, signin, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={[styles.container]}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <SignInForm
        headerText="Sign In"
        errorMessage={state.errorMessage}
        submitButtonText="Sign In"
        onSubmit={signin}
      />
    </View>
  );
};

SignInScreen.navigationOptions = {
};

export default SignInScreen;
