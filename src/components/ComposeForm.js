import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const ComposeForm = ({ onSubmit, initialValues }) => {

    const [body, setBody] = useState(initialValues.body)

  return (
    <View style={{borderWidth:1,borderColor:'green',height:45,flex:1,flexDirection:'row'}}>

<View style={{padding:5,height:45,flex:1,flexDirection:'row',borderWidth:1,borderRadius:10,borderColor:'green'}}>

<View style={{height:40,borderWidth:1,flex:4,borderColor:'red'}}>
        <TextInput
          style={[styles.input]}
          value={body}
          autoCorrect={true}
          autoCapitalize='none'
          placeholder={'Enter the index to scroll'}
          onChangeText={text => setBody(text)}
        />
        </View>

      <View style={{width:80,height:40,flex:1,borderWidth:1,borderColor:'red'}}>
        <Button title="Send" onPress={() => onSubmit(body,initialValues.contributors)} />
      </View>

      </View>

    </View>
  );
};

ComposeForm.defaultProps = {
  initialValues: {
    body: '',
  }
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    height:40,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5
  }
});

export default ComposeForm;
