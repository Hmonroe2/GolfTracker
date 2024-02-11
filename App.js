import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import Profile from './Profile';
import golfCart from './images/golf-cart.png';
import ModalDemo from './Modal';

export default function App() {
  const [isHappy, setIsHappy] = useState(true);
  const Stack = createNativeStackNavigator();
  const cart = golfCart;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          data={isHappy}
          options={{ title: 'Home' }}
        /> */}
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ title: 'Profile' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//  <View style={styles.container}>
//       <Text style={styles.text}>Here we go!</Text>
//       <Button title="hello" onPress={() => {
//         setIsHappy(false
//         )
//       }}> </Button>
//       <Text> We are doing aweso {isHappy ? 'yessss' : 'Nooo'} </Text>
//       <StatusBar style="auto" />
//       <Image
//         source={{
//           uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
//         }}
//         style={{ width: 200, height: 200 }}
//       />
//     </View>
