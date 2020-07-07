import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TextInput, SafeAreaView } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';

export default function App() {
  return (
    <View>
      <SafeAreaView>
     
      </SafeAreaView>
  <ScrollView>
    <View>
    <Text>First Text UI</Text>
    <Text>Second Text UI</Text>
    
    <Image source = {{uri:"https://hi-static.z-dn.net/files/d4e/97d4706f6c5f3ea5e9f87a623b6a7372.jpg"}} style={{width:200,height:300}} ></Image>
    </View>
    
    <TextInput 
    style={{
      borderColor: 'gray',
      borderWidth: 1,
      height: 40
    }}
    defaultValue="you can type in me"
    />

   
  </ScrollView>
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
});
