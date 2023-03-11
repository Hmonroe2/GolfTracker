import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {
  const [isHappy, setIsHappy] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Here we go!</Text>
      <Button title="hello" onPress={() => {
        setIsHappy(false
        )
      }}> </Button>
      <Text> We are doing aweso {isHappy ? 'yessss' : 'Nooo'} </Text>
      <StatusBar style="auto" />
      <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
        }}
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
}

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
