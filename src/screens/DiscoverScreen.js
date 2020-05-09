import React from "react";
import { View,Text, Button, StyleSheet, TouchableOpacity } from "react-native";

//
const DiscoverScreen = ({ navigation }) => {

  //
  //console.log(navigation);

  return (
    
      <View>
        <Text style={styles.text}>Discover Screen</Text>
        <Button
          onPress={()=> navigation.navigate('Discover')}
          title="Go to Posts"
        />
        <Button
            onPress={()=> navigation.navigate('Search')}
            title="Go to Followships"
        />
      </View>

  );

};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default DiscoverScreen;
