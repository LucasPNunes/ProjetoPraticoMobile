import React from "react";
import { StyleSheet, Image, TextInput, View, TouchableOpacity, ImageBackground } from "react-native";
import { Text } from "react-native-web";
import { Link } from '@react-navigation/native';

const ForgorPasswordPage = () =>{
    return(
        <View style={styles.container}>
        <Image source={require('../../../assets/Logo.png')} style ={styles.img} />
        <TextInput 
        placeholder="Email"
        style = {styles.input}
        />
        <TouchableOpacity>
            <Text style={styles.btnTxt}>Recuperar senha</Text>
        </TouchableOpacity>
        <View style={styles.links}>
            <Link to={{screen: 'LoginPage'}}>Voltar para tela de login</Link>
            <Link to={{screen: 'RegisterPage'}}>Cadastre-se </Link>
        </View>
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
        marginBottom: '15px'
    },
    input: {
        backgroundColor: '#85C4FF',
        height: '40px',
        width: '65%',
        borderRadius: '10px',
        marginBottom: '10px'
    },
    links: {
        flexDirection: 'row',
        width: '65%',
        justifyContent: 'space-between',
        marginTop: '25px'
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
export default ForgorPasswordPage;