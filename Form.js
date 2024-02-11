import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';

 
const LoginForm = () => {
  const [value, setValue] = useState(0);
  const [golfer, setGolfer] = useState({})
    const styles = StyleSheet.create({
      container: {
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '',
        marginBottom: '0px',
      },
      text: {
        color: 'rgb(10, 236, 10)',
        size: '5rem',
        fontSize: '2rem',
        fontFamily: 'comic sans',
        fontStyle:'bold'
      },
      input: {
        backgroundColor: 'gray',
        borderColor: 'white',
        border: ' 5px',
        color: 'white',
        borderRadius: '50px',
        margin: '10px',
      },
    });
  
  const nameYourGolfer = (name) => {
    setGolfer({ name: name })
  }
  console.log(golfer.name);
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Login Form </Text>
      <View>
        <TextInput style={styles.input} placeholder="Name"  onChangeText={(text) => nameYourGolfer(text)}/>
        <TextInput style={styles.input } secureTextEntry={true} placeholder="Enter Password" />
      </View>
    </View>
  );
};

export default LoginForm;
