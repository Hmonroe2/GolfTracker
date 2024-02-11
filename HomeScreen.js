import React from 'react';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, Button, StyleSheet, Image } from 'react-native';
import ModalDemo from './Modal';
import LoginForm from './Form';
import Profile from './Profile';

// import golfer from './Golfer'

const HomeScreen = ({ data, navigation }) => {
  const [golfer, setGolfer] = useState({});
  console.log(data);

  const createGolfer = (name) => {
    setGolfer({
      id: 1,
      name: name,
      golfBag: {},
    });
  };

  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      backgroundColor: 'black',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: 'white',
      borderWidth: 2,
    },
    image: {
      // alignItems:'center',
      backgroundColor: 'black',
      height: '400px',
      width: '400px ',
      marginRight: '5rem',
    },
  });
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('./cartoon1.png')} />
      <Text style={styles.text}> Welcome </Text>
      <ModalDemo />
      <Text>
        {/* <Button
          title="Create a Golfer"
          // onPress={() => navigation.navigate('Profile', { name: 'Hunter' })}
          // onPress={() => <ModalDemo />, console.log('hello')}
        /> */}
      </Text>
    </View>
  );
};

export default HomeScreen;
