import React, { useState } from 'react';
import { Button, View, StyleSheet, Pressable, Text, Image } from 'react-native';
import Modal from 'react-native-modal';
import LoginForm from './Form';
import Profile from './Profile';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const ModalDemo = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  const navigation = useNavigation();
  const onPress = () => {
    toggleModal();
    navigation.navigate('Profile', { title: 'Profile' });
  };
  return (
    <View>
      <Pressable style={styles.button} onPress={toggleModal}>
        <Text style={styles.text}> Create a Golfer</Text>
      </Pressable>
      <Modal isVisible={isModalVisible}>
        <View style={styles.container}>
          <Image
            source={require('./smilingCartoon.png')}
            style={{ width: 300, height: 300 }}
          />
          <LoginForm />
          <View>
            <Pressable
              style={styles.button}
              title="Hide modal"
              onPress={toggleModal}>
              <Text style={styles.text}> Exit </Text>
            </Pressable>
            <Pressable
              style={styles.button}
              title="Hide modal"
              onPress={onPress}>
              <Text style={styles.text}> Submit </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'green',
    height: '2rem',
    width: '10rem',
    margin: '10px',
    textAlign: 'center',
    borderRadius: '10px',
  },
  text: {
    // textAlign:'center',
    color: 'white',
    margin: '10px',
  },
});
export default ModalDemo;
