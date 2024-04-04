import { useState } from 'react';
import {Text,View, TextInput, StyleSheet, Pressable} from 'react-native';
import SignUp from './SignUpScreen';

function ContactUs(){

  return (
    <View>
        <Text style={styles.text}>
            ContactUs
        </Text>
    </View>
)
}

export default ContactUs;

const styles = StyleSheet.create({
  text:{
    fontWeight:'bold',
    fontSize:40,
    textAlign:'center',
    color:'white'
}
}
)