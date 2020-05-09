import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const PasswordScreen = () => {

    const [password, setPassword] = useState('');
    return (
        <View>
            <Text>Enter password:</Text>
            <TextInput
                style={styles.input}
                autoCapitalize='none'
                autoCorrect={false}
                value={password}
                onChangeText={ (newValue) => setPassword(newValue) }
            />
            <Text>My name is {password}</Text>
            {password.length < 4
                ? <Text>Password must be 4 characters</Text>
                : <Text>Password is at least 4 characters. Thanks.</Text>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default PasswordScreen;