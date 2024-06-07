import { Image, StyleSheet, View, Text, SafeAreaView, TextInput, TouchableOpacity, CheckBox ,Button} from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';


export default function HomeScreen() {
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');
  const [rememberMe, setRememberMe] = React.useState(false);
  return (

    // <ParallaxScrollView
    //   headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
    //   headerImage={
    //     <Image
    //       source={require('@/assets/images/partial-react-logo.png')}
    //       style={styles.reactLogo}
    //     />
    //   }>
    //   <ThemedView style={styles.titleContainer}>
    //     <ThemedText type="title">Hello WORLD!</ThemedText>
    //     <HelloWave />
    //   </ThemedView>
    //   <ThemedView style={styles.stepContainer}>
    //     <ThemedText type="subtitle">Step 1: TRY IT NOW</ThemedText>
    //     {/* <ThemedText>
    //       Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
    //       Press{' '}
    //       <ThemedText type="defaultSemiBold">
    //         {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
    //       </ThemedText>{' '}
    //       to open developer tools.
    //     </ThemedText> */}
    //   </ThemedView>
    //   {/* <ThemedView style={styles.stepContainer}>
    //     <ThemedText type="subtitle">Step 2: Explore</ThemedText>
    //     <ThemedText>
    //       Tap the Explore tab to learn more about what's included in this starter app.
    //     </ThemedText>
    //   </ThemedView>
    //   <ThemedView style={styles.stepContainer}>
    //     <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
    //     <ThemedText>
    //       When you're ready, run{' '}
    //       <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
    //       <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
    //       <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
    //       <ThemedText type="defaultSemiBold">app-example</ThemedText>.
    //     </ThemedText>
    //   </ThemedView> */}
    // </ParallaxScrollView>
    <SafeAreaView style={styles.container}>
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>
        Let's Sign In {'\n'}
        <Text style={styles.subtitleText}>Login to your account to continue your courses</Text>
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
    {/* <Button  title="Sign Up" /> */}
    <Text style={styles.buttonText}>Sign Up</Text>
    </TouchableOpacity>
  </SafeAreaView>  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
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

  }
});