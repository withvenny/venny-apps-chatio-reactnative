//
import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';

//
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from 'src/context/AuthContext';
import SignUpForm from 'src/components/SignUpForm';
import NavLink from 'src/components/NavLink';
import styles from "src/values/styles";

//
const SignUpScreen = ({ navigation }) => {

  //
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={[styles.container]}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <SignUpForm
        headerText="Sign Up for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        onSubmit={signup}
      />
      <NavLink
        routeName="SignIn"
        text="Already have an account? Sign in instead!"
      />
    </View>
  );
};

SignUpScreen.navigationOptions = () => {
  return {
    header: null
  };
};

export default SignUpScreen;
