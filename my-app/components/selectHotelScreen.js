import { StyleSheet, Text, View, Pressable } from 'react-native'
import { styles } from '../styles/styles'
import { CardHotel } from './hotelCards'



export function SelectHotelScreen({ navigation }) {
    return (
        <View style={styles.formContainer}>
            <Text style={styles_h.text_h}>
                Selecciona un hotel
            </Text>

            <CardHotel></CardHotel>
            import {Button} from '@rneui/base';


           <Button title="Hello World" />;


        </View>);
}
const styles_h = StyleSheet.create({
    container: {
        width: ' 100 %',
        height: '100 %',
        backgroundColor: '#172c94',
    },
    btn: {
        backgroundColor: 'red'
    },
    text_h: {
        fontSize: 23,
        width: '100%',
        height: '3.8%',
        marginLeft: '3%',
        backgroundColor: '#fff',
        marginTop: '-60%'
    }

})