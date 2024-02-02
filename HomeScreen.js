import React from 'react';
import { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, Button, StyleSheet } from 'react-native';
// import golfer from './Golfer'

const HomeScreen = ({ navigation }) => {
  const [golfer, setGolfer] = useState({});

  const createGolfer = (name) => {
     setGolfer({
       id: 1,
       name: name,
       golfBag: {}, 
  });
};

  


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      
    
    },
    text: {
      borderColor: 'red',
      borderWidth: 2,
    },


  });
  return (
    <View style={styles.container}>
      <Text> Welcome </Text>
      <Text>
        <Button
          title="Create a Golfer"
          onPress={() => navigation.navigate('Profile', { name: 'Hunter' })}
        />
      </Text>
    </View>
  );
};


export default HomeScreen;
