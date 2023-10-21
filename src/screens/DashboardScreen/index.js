import { StyleSheet } from "react-native";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { View , Text } from "react-native";

const DashboardScreen = () => {
    return(
        <View style={styles.container}>
            <Image source={require('../../../assets/logo2.png')} style ={styles.img}></Image>
            <View>
                <Text style = {{fontSize: '18px',  }}>
                    Escolha qual seção deseja iniciar:
                </Text>
                <TouchableOpacity style ={styles.bttn}>
                    <Image source={require('../../../assets/Framedoctor.png')} style ={styles.icons}></Image>
                    <Text style = {styles.txt}>Medicos</Text>
                </TouchableOpacity>
                <TouchableOpacity style ={styles.bttn}>
                    <Image source={require('../../../assets/framepatient.png')} style ={styles.icons}></Image>
                    <Text style = {styles.txt}>Pacientes</Text>
                </TouchableOpacity>
                <TouchableOpacity style ={styles.bttn}>
                    <Image source={require('../../../assets/noun-calendar.png')} style ={styles.icons}></Image>
                    <Text style = {styles.txt}>Consultas</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default DashboardScreen;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        height: '100%',
        backgroundColor: 'white'
    },
    bttn: {
        justifyContent: 'end',
        alignItems: 'center',
        backgroundColor: '#0B3B60',
        height: '130px',
        width: '280px',
        margin: '10px',
        borderRadius: '10px'
    },
    txt: {
        color: 'white',
        fontSize: '20px',
        margin: '13px'
    },
    icons: {
        width: '57px',
        height: '60px'
    },
    img: {
        height: '80px',
        width: '250px',
        marginBottom: '80px',
        marginTop: '50px'
    }
})