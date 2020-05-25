//
import React, { useContext } from 'react';
import { View, Image, TouchableOpacity, Text, ImageBackground } from 'react-native';

//
import { NavigationEvents, withNavigation } from 'react-navigation';
import SignInForm from 'src/components/SignInForm';
import NavLink from 'src/components/NavLink';
import { Context } from 'src/context/AuthContext';
import styles from 'src/values/styles';

//
const WelcomeScreen = ({ navigation }) => {

  //
  const image = require('src/assets/welcome.png');
  const logo = require('src/assets/logo-red.png');

  //
  return (

    <View style={[styles.chatio,styles.welcomeContainer]}>

      <ImageBackground source={image} style={[styles.chatio,styles.welcomeImage]}>

        <View style={[styles.chatio],{flex:8,alignItems:'center',justifyContent:'center'}}>

          <Image source={logo} style={{width:150,resizeMode:'contain'}}/>

        </View>

        <View style={[styles.chatio]}>

          <TouchableOpacity onPress={() => navigation.navigate('SignIn')} style={[styles.chatio],{alignItems:'center',backgroundColor:'#ef435a',justifyContent:'center',height:80}}>
            <Text style={{color: '#fbfbfb',textTransform: 'capitalize'}}>Sign In</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={[styles.chatio],{alignItems:'center',backgroundColor:'#081f8f',justifyContent:'center',height:80}}>
            <Text style={{color: '#fbfbfb',textTransform: 'capitalize'}}>Sign Up</Text>
          </TouchableOpacity>

        </View>

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