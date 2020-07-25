//
import React, { useContext } from 'react';
import { View } from 'react-native';

//
import { NavigationEvents } from 'react-navigation';
import { Context as AuthProvider } from 'src/context/AuthContext';
import SignInForm from 'src/components/SignInForm';
import styles from 'src/values/styles';
import Button from 'src/components/Button';
import Label from 'src/constants/Label';

//
const SignInScreen = ({ navigation }) => {
  
  //
  const { state, signin, clearErrorMessage } = useContext(AuthProvider);

  return (
    <View style={[styles.container]}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <SignInForm
        headerText="Sign In"
        errorMessage={state.errorMessage}
        submitButtonText="Sign In"
        onSubmit={signin}
      />
      <Button title = {Label.Join}></Button>
    </View>

  );

};

SignInScreen.navigationOptions = {
};

export default SignInScreen;
