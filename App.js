import { StatusBar } from 'expo-status-bar';
import { StrictMode, useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import Profile from './Profile';
import golfCart from './images/golf-cart.png';
import ModalDemo from './Modal';
import ReactDOM from 'react-dom/client';
//  const root = ReactDOM.createRoot(document.getElementById('root'));
//  root.render(<App />);

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
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    
  );
}

