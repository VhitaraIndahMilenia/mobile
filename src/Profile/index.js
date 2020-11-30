import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
 

 
const Profile = () => {
  return (
    <View style={styles.container}>
        <View style={styles.card}>

            <Image
              style={styles.imageProfile}
              source={require('./n1.jpg')}
            />

            <Text style={{...styles.label, marginTop: 75}}>Username</Text>
            <Text style={styles.field}>Natasha Wilona</Text>
            <Text style={styles.label}>Email</Text>
            <Text style={styles.field}>natashawilona@gmail.com</Text>
            <Text style={styles.label}>Phone number</Text>
            <Text style={{...styles.field, marginBottom: 50}}>087887339802</Text>

        </View>
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  card: {
    borderWidth: 1,
    width: 350,
    borderBottomStartRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: 'pink'
  },

  imageProfile: {
    width: 200,
    height: 200,
    borderRadius: 80,
    marginLeft: 50,
    marginTop: 30
  },
  
  imageBg: {
    width: 348,
    height: 200,
    borderTopRightRadius: 50
  },

  label: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 5,
    marginLeft: 10
  },

  field: {
    marginLeft: 10,
    marginBottom: 10,
    fontSize: 20
  }
});


export default Profile;