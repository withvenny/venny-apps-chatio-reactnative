//
import React, { useState } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

//
import { Text, Button, Input } from 'react-native-elements';
import Spacer from 'src/components/Spacer';

//
import styles from 'src/values/styles';

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
                label="EMAIL"
                labelStyle={[styles.chatio]}
                placeholder="Email..."
                underlineColorAndroid='transparent'
                value={email}
                keyboardType={'email-address'}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCompleteType = "off"
                autoCorrect={false}
                required
                style={[styles.chatio]}
            />

            <Spacer />

            <Input
                secureTextEntry
                placeholder="Password..."
                label="PASSWORD"
                labelStyle={[styles.chatio]}
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
                required
                labelStyle={[styles.chatio]}
                style={[styles.chatio]}
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
