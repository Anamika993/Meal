import { useState } from 'react';
import {Text,View, TextInput, StyleSheet, Pressable} from 'react-native';
import SignUp from './SignUpScreen';

function LoginScreen({navigation}){

return (
<View style={styles.appContainer}>
    <View style={styles.textArea}>
        <Text style={styles.text}>Login</Text>
    </View>
    <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Enter Email' value='example@gmail.com'/>
        <TextInput style={styles.textInput} placeholder='Enter Password' value='123456'/>
        <Pressable style={styles.button} onPress={()=>navigation.navigate('Categories')}>
            <Text style={styles.texts}>Login</Text>
        </Pressable>
    </View>
    <View style={styles.check}>
        <Text style={styles.setText}>
            Don't have an account?
        </Text>
        <Pressable onPress={()=>navigation.navigate('SignUp')}>
            <Text style={styles.setLoginButton}>SignUp</Text>
        </Pressable>
    </View>
    
</View>
)
}

export default LoginScreen;

const styles = StyleSheet.create({
    appContainer:{
    //   flex:1,
      paddingTop:50,
      paddingHorizontal:16,
      backgroundGradient: "vertical",
      backgroundGradientTop: "#603813",
      backgroundGradientBottom: " #b29f94 ",
      height:'100%'

    },
    textArea:{
        // borderWidth:1,
        // borderColor:'white',
        // justifyContent:"center",
        // alignItems:'center',
        marginTop:100,
        marginBottom:15,
    },
    text:{
        textAlign:'center',
        fontSize:35,
        fontWeight:'bold',
        color:'black',
    },
    inputContainer:{
    //   flex:1,
      flexDirection:'column',
      justifyContent:'space-between',
      borderBottomColor: 'white',
      borderColor:"white",
      alignItems:'center',
      marginBottom:24,
    //   color:'white's
    },
    textInput:{
        marginBottom:12,
      borderWidth:1,
      color:'black',
      width:'80%',
      marginRight:5,
      padding:5
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
      },
      texts: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
      check:{
        marginTop:-20,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
      },
      setText:{
        color:"white",
        marginRight:5
      },
      setLoginButton:{
        color:"blue"
      }
}
)