import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View } from 'react-native';
import DashboardScreen from '../screens/DashboardScreen';

const Stack = createNativeStackNavigator();

const AppRoutes = () => {
    return(
      <View style={styles.container}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
         <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
        </Stack.Navigator>
      </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1
    },
  });

export default AppRoutes;