
import React, {useState} from 'react';
import {Alert, View ,StyleSheet ,Text, TouchableOpacity, Image, ScrollView, Modal, TouchableHighlight} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

   

const showAlertHandler = () => {
  Alert.alert(
    'Pesan',
    'Berhasil !', 
    [
      { text: 'Done' },
    ],
    { cancelable: true }
  );
};


  const HomeScreen = () => {

    const [modalVisible1, setModalVisible1] = useState(false);

    return (
      <ScrollView style={styles.container}>

       {/* Make Up */}
      
        <View style={styles.card}>

          <Image style={styles.imgHome} source={require('./k1.jpg')} />  
          <Text style={styles.title}>Make Up</Text>

          <Text style={{borderBottomWidth: 1, width: 250, marginLeft: 25, marginBottom: 10}}></Text>
          
           <Text style={styles.Price}>Rp 100.000</Text>


          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible1}
          >
          <View style={styles.modalView}>

            <Text style={{fontSize: 30, fontWeight: 'bold', color: 'lightgrey', borderBottomWidth: 1, width: 300, textAlign: 'center', marginBottom: 10}}>Detail</Text>
            
            <Image style={styles.imgHome} source={require('./k1.jpg')} />  
            <Text style={styles.title}>Make Up</Text>

            <Text style={{borderBottomWidth: 1, width: 250,  marginBottom: 10}}></Text>


            <View style={{flexDirection: 'column'}}>
               <Text>1. Soft Make Up</Text>
               <Text>2. Bold Make Up</Text>
            </View>

              <Text style={styles.Price}>Rp 100.000</Text>
          
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={{...styles.openButton, backgroundColor: '#f5428d', marginVertical: 5 }} onPress={showAlertHandler}>
                <Text style={styles.txtPesan}>Booking</Text>
              </TouchableOpacity>
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#42f5e0", marginLeft: 5, height: 35, marginTop: 5 }}
                onPress={() => {
                  setModalVisible1(!modalVisible1);
                }}
              >
                <Text style={styles.txtPesan}>Close</Text>
            </TouchableHighlight>
            </View>
            
          </View>
          </Modal>
            <TouchableHighlight
              style={styles.Pesan}
              onPress={() => {
              setModalVisible1(true);
            }}
          >
            <Text style={styles.textStyle}>Detail</Text>
            </TouchableHighlight>
        </View>  


      {/* Perawatan */}
        <View style={styles.card}>

          <Image style={styles.imgHome} source={require('./k2.jpg')} />  
          <Text style={styles.title}>Perawatan</Text>

          <Text style={{borderBottomWidth: 1, width: 250, marginLeft: 25, marginBottom: 10}}></Text>
           <Text style={styles.Price}>Rp 250.000</Text>
            <TouchableOpacity
              style={styles.Pesan}
          >
            <Text style={styles.textStyle}>Detail</Text>
            </TouchableOpacity>
        </View>  

      {/* Facial */}
        <View style={styles.card}>

          <Image style={styles.imgHome} source={require('./k3.jpg')} />  
          <Text style={styles.title}>Facial</Text>
          <Text style={{borderBottomWidth: 1, width: 250, marginLeft: 25, marginBottom: 10}}></Text>
          <Text style={styles.Price}>Rp 200.000</Text>
     
            <TouchableOpacity
             style={styles.Pesan}
          >
            <Text style={styles.textStyle}>Detail</Text>
            </TouchableOpacity>
        </View> 
      </ScrollView>
    );
  };

  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginLeft: 35
    },

    card: {
      borderWidth: 1,
      width: 300,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      marginVertical: 20,
      backgroundColor: 'pink'
    },

    imgHome: {
      width: 298,
      height: 250,
    },

    title: {
      fontSize: 34,
      textAlign: 'center',
      marginVertical: 10,
      fontWeight: '800'
    },

    Price: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center'
    },

    Pesan: {
      borderRadius: 10,
      borderWidth: 1,
      backgroundColor: '#f5428d',
      width: 200,
      paddingVertical: 10,
      marginLeft: 50,
      marginVertical: 10
    },

    txtPesan: {
      textAlign: 'center',
      fontWeight: 'bold',
      textTransform: 'uppercase'
    },

    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
    },
    openButton: {
      backgroundColor: "#F194FF",
      borderRadius: 20,
      paddingVertical: 10,
      elevation: 2,
      width: 150
    },
    textStyle: {
      color: "black",
      fontWeight: "bold",
      textAlign: "center",
      textTransform: 'uppercase'
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });
   
  export default HomeScreen;