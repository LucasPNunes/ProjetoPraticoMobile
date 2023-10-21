import React from "react";
import { StyleSheet, Image, TextInput, View, TouchableOpacity, ImageBackground } from "react-native";
import { Text } from "react-native-web";
import { Link } from '@react-navigation/native';

const RegisterPage = () =>{
    return(
        <View style={styles.container}>
        <Image source={require('../../../assets/Logo.png')} style ={styles.img} />
        <TextInput 
        placeholder="Email"
        style = {styles.input}
        />
        <TextInput 
        placeholder="Password"
        style = {styles.input}
        />
        <TextInput 
        placeholder="Comfirm Password"
        style = {styles.input}
        />
        <TouchableOpacity>
            <Text style={styles.btnTxt}>Cadastrar</Text>
        </TouchableOpacity>
        <Link to={{screen: 'LoginPage'}}>Ja possui uma conta?</Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    img: {
        width: '120px',
        height: '180px',
        marginBottom: '25px'
    },
    input: {
        marginBottom: '15px',
        backgroundColor: '#85C4FF',
        height: '40px',
        width: '65%',
        borderRadius: '10px',
        marginBottom: '10px'
    },
    links: {
        marginTop: '20px'
    },
    txt:{
        marginBottom: '100px',
        color: 'white',
        fontSize: '40px'
    },
    bgimage: {
        justifyContent: 'center',
        width: '100%'
    },
    btnTxt: {
        fontSize: '22px',
        color: 'white',
        backgroundColor: '#339CFF',
        alignItems: 'center',
        padding: 10,
        paddingHorizontal: 50,
        borderRadius: '25px',
    },

})
export default RegisterPage;