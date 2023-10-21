import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View } from 'react-native';
import LoadingScreen from '../screens/LoadingScreen';
import LoginPage from '../screens/LoginPage';
import ForgorPasswordPage from '../screens/ForgorPasswordPage';
import RegisterPage from '../screens/RegisterPage';

const Stack = createNativeStackNavigator();

const AuthRoutes = () => {
    return(
      <View style={styles.container}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
            <Stack.Screen name="LoginPage" component={LoginPage} />
            <Stack.Screen name="ForgorPasswordPage" component={ForgorPasswordPage} />
            <Stack.Screen name="RegisterPage" component={RegisterPage}/>
        </Stack.Navigator>
      </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1
    },
  });

export default AuthRoutes;