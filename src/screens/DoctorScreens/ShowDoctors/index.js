import { View } from "react-native-web";
import Expandable from "../../../components/Expandable";
import { StyleSheet } from "react-native";

const ShowDoctors = () => {
    const data = [
        {
            id: '1',
            title: 'oi'
        }
    ]
    return(
        <View styles ={styles.container}>
            <Expandable data={data}></Expandable>
        </View>
        
    );
}

export default ShowDoctors;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
    },
    expand: {
        width: '100px',
        height: '100px'
    }
  });