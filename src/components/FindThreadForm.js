//
import React, { useState } from 'react';
import { Text, TouchableOpacity, Button, Input, StyleSheet, View, ActivityIndicator } from 'react-native';

//
import styles from 'src/values/styles';

//
const FindThreadForm = ({ onSubmit,item }) => {
  
    //
    //const [email, setEmail] = useState('');
    //const [password, setPassword] = useState('');

    //
    return (
    
        <>

            <TouchableOpacity
              onPress={() => onSubmit({ contributors: item.id })}
            >
              <View style={styles.row}>
                <Text>
                    ({item.id}) {item.name_last}, {item.name_first}
                </Text>
              </View>
            </TouchableOpacity>

        </>

    );

};

export default FindThreadForm;
