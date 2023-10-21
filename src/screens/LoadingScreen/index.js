import { StyleSheet } from "react-native";
import { View, Image } from "react-native";
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const LoadingScreen = () =>{   
    const navigation = useNavigation()
    const [splashVisible, setSplashVisible] = useState(true);

    useEffect(() => {
    setTimeout(() => {
      setSplashVisible(false);
      navigation.navigate('LoginPage'); // Navega para a tela principal após 2 segundos
    }, 3000); // Tempo em milissegundos (2 segundos)

  }, []);

  return (
    <View style={styles.container}>
      {splashVisible ? (
        <Image source={require('../../../assets/Logo.png')} style={styles.logo} />
      ) : null}
    </View>
  );
};


export default LoadingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: '250px',
        height: '320px'
    }
})