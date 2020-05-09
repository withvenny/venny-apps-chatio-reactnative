import React, { Component } from 'react';

import { StyleSheet, View, Text, Button, Alert, TextInput } from 'react-native';

var SampleArray = ["ONE", "TWO"] ;

export default class MainActivity extends Component {

  constructor(props) {
    
       super(props)
    
       this.state = {
    
         Holder: ''
    
       }
    
     }

  AddItemsToArray=()=>{

      //Adding Items To Array.
      SampleArray.push( this.state.Holder.toString() );

      // Showing the complete Array on Screen Using Alert.
      Alert.alert(SampleArray.toString());

  }

 render() {

   return (

      <View style={styles.MainContainer}>

          <TextInput
              
              placeholder="Enter Value here"
    
              onChangeText={TextInputValue => this.setState({ Holder : TextInputValue }) }
    
              style={{textAlign: 'center', marginBottom: 6, height: 45}}
          
          />

          <Button title="Click Here To Add Value To Array" onPress={this.AddItemsToArray} />
          

      </View>

        
   );
 }
}

const styles = StyleSheet.create({

  MainContainer :{

    flex:1,
    justifyContent: 'center',
    margin: 15

  }

});