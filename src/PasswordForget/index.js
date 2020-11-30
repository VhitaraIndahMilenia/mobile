import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
 

 
const PasswordForgetScreen = () => {
  return (
    <View style={styles.container}>
      <Image style = {{width: 350, height: 150}} source={require('../SignIn/s1.png')} />

      <TextInput placeholder='Password Baru' 
      style = {styles.txtInput} 
      secureTextEntry={true}/>

      <TextInput placeholder='Konfirmasi Password' 
      style = {styles.txtInput} 
      secureTextEntry={true}/>

      <TouchableOpacity style={styles.Btn} >
        <Text style={styles.txtBtn}>Ubah</Text>
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
 
export default PasswordForgetScreen;