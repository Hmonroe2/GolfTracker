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

  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      alignItems: 'center',
      flex: 1,
      backgroundColor: 'black',
      color: 'white',
      justifyContent: "center",
      flexDirection: 'column',
      border:'10px, solid, White ', 
      
    },
    text: {
      color: 'white',
      fontSize: 20,
    },
    input: {
      backgroundColor: 'red',
    },
    clubBox: {
      height: '35rem',
      width:'20rem', 
      display:'flex',
      justifyContent: 'space-evenly ',
      alignItems:'center',
      border: '10px solid white',
      alignContent:"space-around"
    }
  });

  const [golfer, setGolfer] = useState({
    id: 1,
    name: 'Hunter',
      golfBag: [
        {driver: 200},
        { '3wood': `1300 yards` },
        
      ],
  });

  const displayGolfer = () => {
    
  }

  const createGolfer = (name) => {
    setGolfer({
      id: 1,
      name: name,
      golfBag: [
        {
          driver: 100,
          '3wood': `1300 yards`
        },
      ],
    });
  }
  const bagCreate = golfer.golfBag.map((bag) => bag); 
  const createBag = bagCreate.map(bag => bag)
  console.log(golfer.golfBag.map((bag) => bag))
  console.log(bagCreate[0])
  console.log(createBag[0])
      
  return (
    <View style={styles.container}>
      <View style={styles.clubBox}>
        <Text style={styles.text}> Clubs </Text>
        <Text style={styles.text} data={bagCreate['driver']}>
         this is bag  {createBag[1]['3wood']}
        </Text>
        <Text style={styles.text}>Driver {golfer.golfBag.driver} yards </Text>
        <Text style={styles.text}>Driver {golfer.golfBag.driver} yards </Text>
        <Text style={styles.text}>Driver {golfer.golfBag.driver} yards </Text>
        <Text style={styles.text}>Driver {golfer.golfBag.driver} yards </Text>
        <Text style={styles.text}>Driver {golfer.golfBag.driver} yards </Text>
        <Text style={styles.text}>Driver {golfer.golfBag.driver} yards </Text>
        <Text style={styles.text}>Driver {golfer.golfBag.driver} yards </Text>
        <Text style={styles.text}>Driver {golfer.golfBag.driver} yards </Text>
      </View>
    </View>
  );
  }
  
export default Profile;


