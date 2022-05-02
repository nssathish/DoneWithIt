import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, Image } from 'react-native';

export default function App() {
  const handlePress = () => {
    console.log("Text pressed")
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>Let the hacking begin. It's a famous quote from the movie social networking that is loosely based on Facebook's history</Text>
      <Image source={{
        height: 300,
        width: 200,
        uri: "https://picsum.photos/200/300"
        }} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
