import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.background}>
            <Feather
                name='search'
                style={styles.iconStyle}
            />
            <TextInput
                autoCapitalize='none'
                autoCorrect={false}
                style={styles.inputStyle}
                placeholder='Search'
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        //borderWidth: 1,
        marginTop: 10,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
    },
    inputStyle: {
        //borderWidth: 1,
        //borderColor: 'black',
        flex: 1,
        fontSize: 18,
    },
    iconStyle: {
        //borderWidth: 1,
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    },
});

export default SearchBar;
