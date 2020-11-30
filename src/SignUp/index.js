import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Alert } from 'react-native';
 

const showAlertHandler = () => {
  Alert.alert(
    'Pesan',
    'Berhasil Mendaftar !', 
    [
      { text: 'Done' },
    ],
    { cancelable: true }
  );
};

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <Image style = {{width: 350, height: 150}} source={require('../SignIn/s1.png')} />

      <TextInput placeholder='Email'
      keyboardType='email-address' 
      style = {styles.txtInput}/>

      <TextInput placeholder='Username'
      style = {styles.txtInput}/>

      <TextInput placeholder='Phone Number'
      keyboardType='number-pad' 
      style = {styles.txtInput}/>

      <TextInput placeholder='Password' 
      style = {styles.txtInput} 
      secureTextEntry={true} />

      <TextInput placeholder='Konfirmasi Password' 
      style = {styles.txtInput} 
      secureTextEntry={true} />

      <TouchableOpacity style={styles.Btn} onPress={showAlertHandler} >
        <Text style={styles.txtBtn}>Daftar</Text>
      </TouchableOpacity>
  
    </View>


  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink'
  },

  txtInput: {
    borderWidth: 1,
    borderRadius: 20,
    width: 350,
    paddingHorizontal: 10,
    paddingVertical: 10,
    textAlign: 'center',
    marginTop: 15
  },

  Btn: {
    borderWidth: 1,
    borderRadius: 20,
    width: 350,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 10,
    backgroundColor: '#f5428d'
  },

  txtBtn: {
    textTransform: 'uppercase',
    textAlign: 'center',
    color: '#fff',
    fontWeight: '900'
  }
});
 
export default SignUpScreen