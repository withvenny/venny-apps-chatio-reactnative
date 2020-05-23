//
import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ImageBackground } from 'react-native';

//
import { NavigationEvents, withNavigation } from 'react-navigation';
import SignInForm from 'src/components/SignInForm';
import NavLink from 'src/components/NavLink';
import { Context } from 'src/context/AuthContext';
import styles from 'src/values/styles';

//
const WelcomeScreen = ({ navigation }) => {

    const navigationOptions = {
        header: null
      };

    //
    const image = require('src/assets/welcome.png');
  
  //
  return (
    <View style={[styles.welcomeContainer]}>
    <ImageBackground source={image} style={[styles.welcomeImage]}>
      <Text style={[styles.welcomeText]}>Inside</Text>
    <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <Text>SignIn</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text>SignUp</Text>
    </TouchableOpacity>
    </ImageBackground>
  </View>
  );
};

WelcomeScreen.navigationOptions = () => {
    return {
        header: null
    };
};  

export default WelcomeScreen;