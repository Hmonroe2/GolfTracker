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
  Pressable,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';



const Profile = ({ navigation, route }) => {
  const [club, setClub] = useState();
  const [yards, setYards] = useState()

  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      alignItems: 'center',
      flex: 1,
      backgroundColor: 'black',
      color: 'white',
      justifyContent: 'center',
      flexDirection: 'column',
      border: '10px, solid, White ',
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
      width: '20rem',
      display: 'flex',
      justifyContent: 'space-evenly ',
      alignItems: 'center',
      border: '10px solid white',
      alignContent: 'space-around',
    },
    head: {
      color: 'green',
      fontSize: 40,
      fontWeight: 'bold',
      border: 'solid ', 
      borderBottom: '2px solid green',
      borderTop: 'none'
    },
  });

  const [golfer, setGolfer] = useState({
    id: 1,
    name: 'Hunter',
      golfBag: [
        { driver: 200 },
       {'3wood': `1300 yards` },
      ],
  });

  const golfClubs = [
    'Driver', '3-wood', '5-wood', '7-wood', '3-hybrid',
    '4-hybrid', '1-iron', '2-iron', '3-iron', '4iron',
    '5-iron', '6-iron', '7-iron', '8-iron', '9-iron',
    'Pitching Wedge', 'Gap Wedge', 'Sand Wedge', 'Lob wedge', 'Putter']
    console.log(golfClubs)

  const displayGolfer = () => {
  }
  const createGolfBag = () => { 

  }

  // const createGolfer = (name) => {
  //   setGolfer({
  //     id: 1,
  //     name: name,
  //     golfBag: [
  //       {
  //         driver: 100,
  //       }
  //        { '3wood': `1300 yards` }
  //       },
  //     ],
  //   });
  // }
 const addGolfClub = (clubss, distance) => {
   golfer.golfBag.push({ 'clubss': distance });
 };

  const bagCreate = golfer.golfBag.map((bag) => bag); 
  const createBag = bagCreate.map(bag => bag)
  console.log(golfer.golfBag.map((bag) => bag))
  console.log(bagCreate[0])
  console.log(createBag[0])
  console.log(golfer)
      
  return (
    <View style={styles.container}>
      <View style={styles.clubBox}>
        <Text style={styles.head}> Clubs </Text>
          <RNPickerSelect
              onValueChange={(value) => setClub(value)}
              items={[
                { label: 'Driver', value: 'Driver' },
                { label: '3-Wood', value: '3-Wood' },
                { label: '4-wood', value: '4-wood' },
              ]}
            />
        <RNPickerSelect
              onValueChange={(value) => setYards(value)}
              items={[
                { label: 1, value: 1 },
                { label: 2, value: 2 },
                { label: 3, value: 3 },
              ]}
            />
        <Pressable style={styles.head} onPress={addGolfClub(club, yards)}>
          <Text style={styles.head}>Add a club</Text>
        </Pressable>

        {/* <Text style={styles.text} > {golfClubs.map((club) => club.split(' ')) }</Text> */}
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


