import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import * as firebase from 'firebase';

 

const SignInScreen = ({onSignIn, navigation}) => {
  const [email,setEmail] = React.useState('');
  const [password,setPassword] = React.useState('');

  const loginPressed = () => {
    firebase.auth().signInWithEmailAndPassword(email,password)
      .then(()=> {

      }).catch((err) => {
        alert(err.message);
      })
  }
  return (
    <View style={styles.container}>
      <Image style = {{width: 300, height: 150}} source={require('./s1.png')} />

      <TextInput placeholder='Email/Username'
      keyboardType='email-address' 
      style = {styles.txtInput}
      value={email}
          onChangeText={(text) => {setEmail(text)}}/>

      <TextInput placeholder='Password' 
      style = {styles.txtInput} 
      secureTextEntry={true}
      value={password}
           onChangeText={(text) => {setPassword(text)}} />

      <TouchableOpacity style={styles.Btn} onPress={loginPressed}>
        <Text style={styles.txtBtn}>Masuk</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.Btn} onPress={() => navigation.navigate('Sign Up')}>
              <Text style={styles.txtBtn}>Daftar</Text>
      </TouchableOpacity>

      <View style={{flexDirection: 'row'}}>
        <Text style={{marginRight: 5}}>Anda lupa dengan Password anda?</Text>
        <Text style={{color: 'blue', textDecorationLine: 'underline' }} onPress={() => navigation.navigate('Password Forget')}>Ganti Password Anda</Text>
      </View>
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
    width: 300,
    paddingHorizontal: 10,
    paddingVertical: 10,
    textAlign: 'center',
    marginTop: 15
  },

  Btn: {
    borderWidth: 1,
    borderRadius: 20,
    width: 300,
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
 
export default SignInScreen;

