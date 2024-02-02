import React, { useState } from 'react';
import golfCart from './images/golf-cart.png';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Text,
  Button,
  View,
  ScrollView,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';

const Profile = ({ navigation, route }) => {
  // const [number, setNumber] = useState('');
  

  const setYards = () => {
    clubs.driver = 23;
  };

  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
    },
    text: {
      fontSize: 20,
    },
    input: {
      backgroundColor: 'red',
    },
  });

  // const golfer = {
  //   id: 1,
  //   name: "Hunter",
  //   golfBag: {
  //     Driver: 250,
  //     '3-Wood': 200,
  //     '5H': 190,
  //       4: 180,

  //     }
  const [golfer, setGolfer] = useState({});

  const createGolfer = (name) => {
    setGolfer({
      id: 1,
      name: name,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={(styles.container, console.log(golfer))}>
        console.log(golfer)
        <Text style={styles.text}>Clubs</Text>
        {/* <Text> {setGolfer('hrelo')} </Text> */}
        {/* <TextInput
          style={styles.input}
          label={'hello'}
          onChangeText={(newText) => setNumber(newText)}
          defaultValue={golfer}
        /> */}
        <Button title="Create a Golfer" onPress={() => createGolfer()} />
        <Text> Driver: {golfer.name} </Text>
        <Text> 3wood: {golfer.id} </Text>
        <Text> Hybrid: </Text>
        <Text> 5 Iron </Text>
        <Text> 6 Iron </Text>
        <Text> 7 Iron </Text>
        <Text> 8 Iron </Text>
        <Text> 9 Iron </Text>
        <Text> Pitch </Text>
        <Text> Sand </Text>
        <Text> 54 </Text>
        <Text> 56 </Text>
      </Text>
    </View>
  );
};

export default Profile;

// <Image
//           source={require('./images/golf-cart.png')}
//           style={{ width: 200, height: 200 }}
//         />
