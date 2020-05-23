//
import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';

//
import { NavigationEvents } from 'react-navigation';
import SignInForm from 'src/components/SignInForm';
import NavLink from 'src/components/NavLink';
import { Context } from 'src/context/AuthContext';

//
const SignInScreen = () => {
  
  //
  const { state, signin, clearErrorMessage } = useContext(Context);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <SignInForm
        headerText="Sign Inc to Your Account"
        errorMessage={state.errorMessage}
        onSubmit={signin}
        submitButtonText="Sign In"
      />
      <NavLink
        text="Dont have an account? Sign up instead"
        routeName="SignUp"
      />
    </View>
  );
};

SignInScreen.navigationOptions = {
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250
  }
});

export default SignInScreen;
