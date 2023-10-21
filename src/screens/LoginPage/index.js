import React, { useContext } from "react";
import { StyleSheet, Image, TextInput, View, TouchableOpacity, ImageBackground } from "react-native";
import { Link } from '@react-navigation/native';
import AuthContext from "../../contexts/AuthContext";

const LoginPage = () =>{
    const { signIn } = useContext(AuthContext);
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
            <Link style = {styles.btnTxt} to={{ screen: 'DashboardScreen'}}
            onPress={() => signIn()}
            >
                Login
            </Link>
        <View style = {styles.links}>
            <Link to={{screen: 'ForgorPasswordPage'}}>Esqueceu a senha?</Link>
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
        marginBottom: '50px',
        width: '100px',
        height: '150px'
    },
    input: {
        marginBottom: '15px',
        backgroundColor: '#85C4FF',
        height: '40px',
        width: '65%',
        borderRadius: '10px'

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
    btnTxt: {
        fontSize: '22px',
        color: 'white',
        backgroundColor: '#339CFF',
        alignItems: 'center',
        padding: 10,
        paddingHorizontal: 30,
        borderRadius: '25px',
    },

})
export default LoginPage;