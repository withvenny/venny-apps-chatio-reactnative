//
import React, { useState } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

//
import { Text, Button, Input } from 'react-native-elements';
import Spacer from 'src/components/Spacer';

//
import styles from "src/values/styles";

//
const SignInForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  
    //
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    //
    return (
    
        <>

            <Spacer>
                <Text h3>{headerText}</Text>
            </Spacer>

            <Input
                label="Email"
                placeholder="Email placeholder..."
                underlineColorAndroid='transparent'
                value={email}
                keyboardType={'email-address'}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCompleteType = "off"
                autoCorrect={false}
                required
            />

            <Spacer />

            <Input
                secureTextEntry
                label="Password"
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
                required
            />

            {errorMessage ? (
                <Text style={[styles.errorMessage]}>{errorMessage}</Text>
            ) : null}

            <Spacer>
                <Button
                title={submitButtonText}
                onPress={() => onSubmit({ email, password })}
                />
            </Spacer>

        </>

    );

};

export default SignInForm;
