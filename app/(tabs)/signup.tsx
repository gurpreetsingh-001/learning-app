import { Image, StyleSheet, View, Text, SafeAreaView, TextInput, TouchableOpacity, CheckBox ,Button} from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';


export default function Signup() {
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');
  const [rememberMe, setRememberMe] = React.useState(false);
  return (

    
    <SafeAreaView style={styles.container}>
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>
        Let's Sign Up {'\n'}
        <Text style={styles.subtitleText}>Signup to your account to continue your courses</Text>
      </Text>
    </View>

    <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      placeholder="Email"
    />
    <TextInput
      style={styles.input}
      onChangeText={onChangeNumber}
      value={number}
      placeholder="Password"
      keyboardType="numeric"
    />

    <View style={styles.rememberMeContainer}>
      <View style={styles.rememberMeCheckbox}>
        <CheckBox
         />
        <Text style={styles.rememberMeText}>Remember Me</Text>
      </View>
      <View>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </View>
    </View>
    <TouchableOpacity style={styles.buttonClass} onPress={()=>{console.log("Button Pressed");
    }}>
    
    <Text style={styles.buttonText}>Sign Up</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.buttonClass1} onPress={()=>{console.log("Button Pressed");
    }}>
    
    <Text style={styles.buttonText}>Sign In</Text>
    </TouchableOpacity>
  </SafeAreaView>  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    justifyContent:'center',
    marginLeft:10,
    marginRight:10,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 30,
    gap: 8,
  },
  titleText: {
    fontSize: 24,
  
  },
  subtitleText: {
    fontSize: 16,
  },
  input: {
    height: 40,
    marginBottom:10,
    marginTop:10,
    borderWidth: 1,
    borderRadius:10,
    padding: 10,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 12,
    marginTop: 8,
  },
  rememberMeCheckbox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberMeText: {
    marginLeft: 8,
  },
  forgotPasswordText: {
    color: 'blue',
  },
  buttonClass:{
    borderRadius:10,
    marginTop:10,
    backgroundColor: '#FC4F72',
    color:"#FC4F72",

  },
  buttonText:{
    textAlign:'center',
    padding:10,
    color:'#ffffff',
    fontSize:18,

  },
  buttonClass1:{
    borderRadius:10,
    marginTop:10,
    backgroundColor: 'blue',
    

  },
});