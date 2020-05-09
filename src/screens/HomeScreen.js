import React from "react";
import { View,Text, Button, StyleSheet, TouchableOpacity } from "react-native";

//
const HomeScreen = ({ navigation }) => {

  //
  //console.log(navigation);

  return (
    
      <View>
        <Text style={styles.text}>Welcome to Venny I/O Apps</Text>
        <Button
          onPress={()=> navigation.navigate('IndexPost')}
          title="Go to Posts"
        />
        <Button
            onPress={()=> navigation.navigate('IndexFollowship')}
            title="Go to Followships"
        />
        <Button
            onPress={()=> navigation.navigate('IndexProfile')}
            title="Go to Profiles"
        />
        <Button
            onPress={()=> navigation.navigate('IndexThread')}
            title="Go to Threads"
        />
        <Button
            onPress={()=> navigation.navigate('Account')}
            title="Go to Account"
        />
      </View>

  );

};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
